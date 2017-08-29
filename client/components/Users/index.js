import React, { Component } from 'react';
import Grid from '../Common/Grid';
import './users.scss';

export default class Users extends Component {

    render() {
        return (
            <div>
                <Grid  fields={this.props.fields} data={[]}/>
            </div>
        );
    }
}

