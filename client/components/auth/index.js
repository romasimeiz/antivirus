import React, { Component } from 'react';

import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import './style.scss';

export default class Auth extends Component {

    render() {
        const {} = this.props;
        const fields = [ {name:'Sites', className: 'fa fa-diamond'}, {name:'Options', className: 'fa fa-laptop'} ];
        const user = {name: 'John Doe', photo: '/assets/img/profile_small.jpg'}
        const {handleLogout} = this.props;
        return (
            <div className="viewport">
                <Sidebar user={user} fields={fields} />
                <div id="page-wrapper" className="gray-bg dashbard-1" style={{minHeight: 547}}>
                    <Header handleLogout={handleLogout} />
                    <div className="body">
                        <h1>Auth</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

