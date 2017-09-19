import React, { Component } from 'react';
import './style.scss';

export default class Content extends Component {
    render() {
        return (
            <div className="wrapper wrapper-content">
                { this.props.children }
            </div>
        )
    }
}