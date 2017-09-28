import React, { Component } from 'react';
import Table from './fragments/table';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortKey: props.sortBy ? props.sortBy : null
        };
    }

    /**
     * Calls the sort function
     * @param key
     */
    sortFunction(key) {
        if (this.isSortable(key)) {
            this.setState({
                    sortKey: this.state.sortKey === key ? '-' + key : key
                },
                () => this.props.sortFunction(this.state.sortKey)
            );
        }
    }

    /**
     * Is the field sortable
     * @param key
     * @returns {Example.sortFunction|Grid.sortFunction|boolean}
     */
    isSortable(key) {
        return this.props.sortFields && this.props.sortFields.indexOf(key) != -1;
    }

    render() {
        return (
            <Table
                { ...this.props }

                sortKey={ this.state.sortKey }
                isSortable={ (key) => this.isSortable(key) }
                sortFunction={ (key) => this.sortFunction(key) }
            />
        );
    }
}