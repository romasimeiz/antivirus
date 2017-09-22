import React, { Component } from 'react';
import Delete from '../../containers/Delete';
import Update from '../../components/Common/Actions/update';
import Grid from '../Common/iGrid';
import './style.scss';


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
            <Grid
                data={ this.props.projects.data }
                dataTotal={ this.props.projects.total }
                dataPerPage={ this.props.projects.per_page }

                fields={ {
                    id: 'ID',
                    name: 'Name',
                    link: 'Link',
                    is_active: 'Status'
                } }
                sortFields={ ['id', 'name'] }

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
        );
    }
}
