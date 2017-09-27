import React, { Component } from 'react';
import Dialog from './fragments/dialog';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog { ...this.props } />
        );
    }
}