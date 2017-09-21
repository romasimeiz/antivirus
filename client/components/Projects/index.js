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
                <NavLink to={'/projects/create'} />
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