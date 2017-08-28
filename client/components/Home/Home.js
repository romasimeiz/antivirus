import React, { Component } from 'react';
import Grid from '../Common/Grid';
import './home.scss';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Grid  fields={this.props.fields} data={[]}/>
            </div>
        );
    }
}

