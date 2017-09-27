import React from 'react';
import BaseComponent from './../BaseComponent';
import Grid from '../../Common/iGrid';
import BoxWrapper from '../../Common/BoxWrapper';
import { SpinnerWave } from '../../Common/Spinner';

export default class extends BaseComponent {
    constructor(props){
        super(props);

        this._data = {
            page: 1,
            sort: null
        };
    }

    componentDidMount() {
        this.getData();
    }

    sortFunction(field) {
        this._data.sort = field;
        this.getData();
    }

    handlePageChange(page) {
        this._data.page = page;
        this.getData();
    }

    getData() {
        this.props.getData(this._data);
    }

    render() {
        return (
            <BoxWrapper
                { ...this.props }
                titleContent={ (this.titleContent ? this.titleContent() : null) }
            >
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
