import React, { Component } from 'react';
import Dialog from './fragments/dialog';
import config from './config';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog { ...config.modal } { ...config.confirm } { ...this.props } />
        );
    }
}