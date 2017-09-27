import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    getView() {}

    render() {
        if (this.props.show === false) {
            return null;
        }

        return this.getView();
    }
}
