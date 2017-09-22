import React, { Component } from 'react';
import Wrapper from './fragments/wrapper';

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSelf: true,
            showContent: true
        };
    }

    /**
     * Show/hide the content
     */
    toggleContent() {
        this.setState({
            showContent: !this.state.showContent
        });
    }

    /**
     * Removes itself
     */
    toggleSelf() {
        this.setState({
            showSelf: !this.state.showSelf
        });
    }

    render() {
        if (!this.state.showSelf) {
            return null;
        }

        return (
            <Wrapper
                { ...this.props }
                showContent={ this.state.showContent }
                toggleSelf={ () => this.toggleSelf() }
                toggleContent={ () => this.toggleContent() }
            />
        );
    }
}
