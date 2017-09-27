import React, { Component } from 'react';
import Button from './fragments/button';
import config from './config';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button { ...config.button } { ...this.props } />
        );
    }
}