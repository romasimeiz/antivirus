import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Header from '../Common/Header';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.element
};
