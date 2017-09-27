import React, { Component } from 'react';
import Table from './fragments/table';

export default class extends Component {
    constructor(props) {
        super(props);

        this._sort = {
            key: null,
            method: false
        };

        this.state = {
            sortKey: null,
            sortMethod: null
        };
    }

    /**
     * Calls the sort function
     * @param key
     */
    sortFunction(key) {
        if (this.isSortable(key)) {
            if (this._sort.key !== key) {
                this._sort.key = key;
                this._sort.method = false;
            }

            this._sort.method = !this._sort.method;

            this.props.sortFunction((this._sort.method?'':'-') + key);

            this.setState({sortKey:key, sortMethod:this._sort.method?'asc':'desc'});
        }
    }

    /**
     * Is the field sortable
     * @param key
     * @returns {Example.sortFunction|Grid.sortFunction|boolean}
     */
    isSortable(key) {
        return this.props.sortFunction && (!this.props.sortFields || this.props.sortFields.indexOf(key) != -1);
    }

    render() {
        return (
            <Table
                { ...this.props }

                sortKey={ this.state.sortKey }
                sortMethod={ this.state.sortMethod }

                isSortable={ (key) => this.isSortable(key) }
                sortFunction={ (key) => this.sortFunction(key) }
            />
        );
    }
}