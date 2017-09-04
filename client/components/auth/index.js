import React, { Component } from 'react';

import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import './style.scss';

export default class Auth extends Component {

    render() {
        const {handleLogout, auth, sideBar} = this.props;
        return (
            <div className="viewport">
                <Sidebar user={auth.user} fields={sideBar}/>
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <Header handleLogout={handleLogout}/>
                    <div className="body">
                        <h1>Auth</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

