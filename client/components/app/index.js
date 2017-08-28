import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.element
};
