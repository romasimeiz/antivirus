import React, { Component } from 'react';
import constants from './constants';
import config from './config';
import Wrapper from './Wrapper';
import Table from './Table';
import Paginate from './fragments/paginate';
import './style.scss';

export default class Grid extends Component {
    static tableStyle = constants.tableStyle;

    constructor(props) {
        super(props);

        this.resetCache();
    }

    componentDidMount() {
        this.resetCache();
    }

    componentWillUnmount() {
        this.resetCache();
    }

    /**
     * Reset cache
     */
    resetCache() {
        this._data = null;
        this._fields = null;
    }

    /**
     * Prepares the data
     * @returns {null|Array|*}
     */
    getData() {
        if (this._data === null) {
            this._data = [];
            if (this.props.data && this.props.data instanceof Array) {
                this._data = this.props.data;
            }
        }

        return this._data;
    }

    /**
     * Prepares the fields
     * @returns {null|{}|*}
     */
    getFields() {
        if (this._fields === null) {
            this._fields = {};

            let fieldsType;
            if (this.props.fields) {
                fieldsType = this.props.fields.constructor;
            }

            switch (fieldsType) {
                case Array:
                    this._fields = this._arrayToObject(this.props.fields);
                    break;
                case Object:
                    this._fields = this.props.fields;
                    break;
                default:
                    if (!!this.getData()[0]) {
                        this._fields = this._arrayToObject(Object.keys(this.getData()[0]));
                    }
            }
        }

        return this._fields;
    }

    /**
     * Creates object from array
     * {
     *  arrayValue: ArrayValue
     * }
     * @param data
     * @returns {{}}
     * @private
     */
    _arrayToObject(data) {
        let result = {};

        if (data.length) {
            data.map(item => result[item] = item.charAt(0).toUpperCase() + item.slice(1));
        }

        return result;
    }

    /**
     * Handle page change
     * @param data
     */
    handlePageChange(data) {
        this.resetCache();
        this.props.onPageChange(++data.selected);
    }

    /**
     * Sort function
     * @param field
     */
    sortFunction(field) {
        this.resetCache();
        this.props.sortFunction(field);
    }

    render() {
        return (
            <Wrapper
                { ...config.wrapper }
                { ...this.props }
            >
                <Table
                    { ...config.table }
                    { ...this.props }
                    data={ this.getData() }
                    fields={ this.getFields() }
                    sortFunction={ (field) => this.sortFunction(field) }
                />
                <Paginate
                    { ...config.pagination }
                    { ...this.props }
                    dataTotal={ this.props.dataTotal }
                    dataPerPage={ this.props.dataPerPage }
                    onPageChange={ (data) => this.handlePageChange(data) }
                />
            </Wrapper>
        );
    }
}
