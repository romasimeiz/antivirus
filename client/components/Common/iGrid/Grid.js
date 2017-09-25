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
            this._fields = [];

            let fieldsType;
            if (this.props.fields) {
                fieldsType = this.props.fields.constructor;
            }

            switch (fieldsType) {
                case Array:
                    this.props.fields.map((item) => {
                        if (item instanceof Object) {
                            this._fields.push(this.prepareFieldItem(item.name, item.mapping));
                        } else {
                            this._fields.push(this.prepareFieldItem(item));
                        }
                    });
                    break;
                case Object:
                    Object.keys(this.props.fields).map((item) => {
                        this._fields.push(this.prepareFieldItem(this.props.fields[item], item));
                    });
                    break;
                default:
                    if (!!this.getData()[0]) {
                        Object.keys(this.getData()[0]).map((item) => {
                            this._fields.push(this.prepareFieldItem(item));
                        });
                    }
            }
        }

        return this._fields;
    }

    /**
     * Prepares items of fields
     * @param name
     * @param mapping
     * @returns {{name: string, mapping: *}}
     */
    prepareFieldItem(name, mapping = null) {
        return {
            name: (name.charAt(0).toUpperCase() + name.slice(1)),
            mapping: (mapping ? mapping : name)
        };
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
                    sortFunction={ (!!this.props.sortFunction ? (field) => this.sortFunction(field) : null) }
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
