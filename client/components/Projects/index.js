import React, { Component } from 'react';
import Grid from '../Common/Grid';

import './projects.scss';
import {NavLink} from 'react-router-dom';

export default class Projects extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        return (
            <div>
                <NavLink to={'/projects/create'} className="btn btn-primary m-b-md">
                    <i className="fa fa-plus m-r-xs"> </i>
                     Create Project
                </NavLink>
                <Grid
                    fields={this.props.fields}
                    data={this.props.projects}
                    actions={this.props.actions}
                    pushToRoute={this.props.pushToRoute}
                    pagesCount={this.props.pagesCount}
                    pageClick={this.props.getProjects}
                />
            </div>
        );
    }
}