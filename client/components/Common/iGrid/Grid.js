import React, { Component } from 'react';
import constants from './constants';
import config from './config';
import Table from './Table';
import Paginate from './fragments/paginate';
import './style.scss';
import queryString from 'query-string';

export default class extends Component {
    static tableStyle = constants.tableStyle;

    constructor(props) {
        super(props);

        this.queryParams = queryString.parse(location.search);

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
        this._fields = null;
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
    onPageChange(data) {
        this.resetCache();
        this.props.getData({ page: ++data.selected });
    }

    /**
     * Sort function
     * @param sort
     */
    sortFunction(sort) {
        this.resetCache();
        this.props.getData({ sort: sort });
    }

    render() {
        return (
            <div { ...config.wrapper }>
                <Table
                    { ...config.table }
                    { ...this.props }
                    fields={ this.getFields() }
                    sortFunction={ (field) => this.sortFunction(field) }
                    sortBy={ this.queryParams.sort ? this.queryParams.sort : null }
                />
                <Paginate
                    { ...config.pagination }
                    { ...this.props }
                    forcePage={ this.queryParams.page ? this.queryParams.page - 1 : null }
                    dataTotal={ this.props.dataTotal }
                    dataPerPage={ this.props.dataPerPage }
                    onPageChange={ (data) => this.onPageChange(data) }
                />
            </div>
        );
    }
}
