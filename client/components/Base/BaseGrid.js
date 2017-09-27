import React from 'react';
import BaseComponent from './BaseComponent';
import Grid from '../Common/iGrid';
import BoxWrapper from '../Common/BoxWrapper';
import { SpinnerWave } from '../Common/Spinner';

export default class extends BaseComponent {
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

    render() {
        return (
            <BoxWrapper { ...this.props }>
                <SpinnerWave show={ this.props.isFetching } />
                <Grid
                    { ...this.props }

                    data={ this.props.data.data }
                    dataTotal={ this.props.data.total }
                    dataPerPage={ this.props.data.per_page }

                    tableStyle={ Grid.tableStyle.HOVER }

                    onPageChange={ (page) => this.handlePageChange(page) }
                    sortFunction={ (field) => this.sortFunction(field) }
                    setActions={ (this.setActions ? (data) => this.setActions(data) : null) }
                />
            </BoxWrapper>
        );
    }
}
