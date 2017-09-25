import React, { Component } from 'react';
import Delete from '../../containers/Delete';
import Update from '../../components/Common/Actions/update';
import Grid from '../Common/iGrid';
import './style.scss';

const fields = [
    {name:'ID',mapping:'id'},
    {name:'Name',mapping:'name'},
    {name:'User',mapping:'user.name'},
    {name:'Link',mapping:'link'},
    {name:'Status',mapping:'is_active'}
];

export default class Example extends Component {
    constructor(props){
        super(props);

        this._page = 1;
        this._sort = null;
    }

    componentDidMount() {
        this.getProjects();
    }

    sortFunction(field) {
        this._sort = field;
        this.getProjects();
    }

    handlePageChange(page) {
        this._page = page;
        this.getProjects();
    }

    getProjects() {
        this.props.getProjects(this._page, this._sort);
    }

    setActions(data) {
        return (
            <div>
                <Delete entity="projects" entityId={ data.id }/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Grid
                    data={ this.props.projects.data }
                    dataTotal={ this.props.projects.total }
                    dataPerPage={ this.props.projects.per_page }

                    fields={ fields }
                    sortFields={ ['id', 'name', 'user.name'] }

                    title="Projects"
                    tableStyle={ [Grid.tableStyle.HOVER, Grid.tableStyle.BORDERED] }
                    thead={ true }
                    tfoot={ true }
                    options={ true }

                    onPageChange={ (page) => this.handlePageChange(page) }
                    sortFunction={ (field) => this.sortFunction(field) }
                    setActions={ this.setActions }

                    previousLabel="Previous"
                    nextLabel="Next"
                />

                <Grid
                    data={[{one:'1', two:'2', three:'3'},{one:'4', two:'5', three:'6'}]}
                    fields={[
                        {name:'Third',mapping:'three'},
                        {name:'Second',mapping:'two'},
                        {name:'First',mapping:'one'}
                    ]}
                />

                <Grid
                    data={[{one:'1', two:'2', three:'3'}]}
                    fields={['one','two']}
                />

                <Grid
                    data={[{one:'1', two:'2', three:'3', four:'4'},{one:'5', two:'6', three:'7', four:'8'}]}
                />
            </div>
        );
    }
}
