import React, { Component } from 'react';
import Grid from '../Common/Grid';
import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic'
import {Route} from 'react-router';

import './projects.scss';

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
                <BreadcrumbsItem to={'/projects'}>
                    Projects
                </BreadcrumbsItem>
                <Grid fields={this.props.fields} data={this.props.projects} actions={this.props.actions} pushToRoute={this.props.pushToRoute} />
            </div>
        );
    }
}