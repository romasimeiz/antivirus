import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return (
            <div>
                <div className="main-container">
                    <h1>here</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
App.propTypes = {
    children: PropTypes.node
};
export default App;
