import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default class App extends Component {
    render() {

        return (
            <div>

                <div id="page-wrapper" className="gray-bg dashbard-1" style={{minHeight: 547}}>

                    <div className="main-container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.element
};
