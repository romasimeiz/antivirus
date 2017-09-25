import React, { Component } from 'react';
import BaseComponent from './BaseComponent'
import Grid from '../Common/iGrid';
import Update from '../Common/Actions/update';
import View from '../Common/Actions/view';
import Delete from '../../containers/Delete';

export default class  BaseGrid extends BaseComponent {
    constructor(props){
        super(props);

        this._page = 1;
        this._sort = null;
    }

    componentDidMount() {
        this.getData();
    }

    sortFunction(field) {
        this._sort = field;
        this.getData();
    }

    handlePageChange(page) {
        this._page = page;
        this.getData();
    }

    getData() {
        this.props.getData(this._page, this._sort);
    }

    setActions(data) {
        let link = `/${ this.props.type }/${ data.id }/`;

        return (
            <div className="actions">
                <View key={ 'view_btn_' + data.id } type="view"  link={ link + 'view' } />
                <Update key={ 'update_btn_' + data.id } type="update" link={ link + 'update' } />
                <Delete entity={ this.props.type } entityId={ data.id } />
            </div>
        );
    }

    render() {
        return (
            <Grid
                { ...this.props }

                data={ this.props.data.data }
                dataTotal={ this.props.data.total }
                dataPerPage={ this.props.data.per_page }

                tableStyle={ Grid.tableStyle.HOVER }

                onPageChange={ (page) => this.handlePageChange(page) }
                sortFunction={ (field) => this.sortFunction(field) }
                setActions={ (data) => this.setActions(data) }
            />
        );
    }
}
