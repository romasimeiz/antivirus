import React, { Component } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';


export default class App extends Component {
    render() {
        const fields = [ {name:'Sites', className: 'fa fa-diamond'}, {name:'Options', className: 'fa fa-laptop'} ];
        const user = {name: 'John Doe', photo: '/assets/img/profile_small.jpg'}
        return (
            <div>
                <Sidebar user={user} fields={fields} />
                <div id="page-wrapper" className="gray-bg dashbard-1" style={{minHeight: 547}}>
                    <Header />
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
