import React, { Component } from 'react';

import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import './style.scss';

export default class Auth extends Component {

    render() {
        const {} = this.props;
        const fields = [ {name:'Sites', className: 'fa fa-diamond'}, {name:'Options', className: 'fa fa-laptop'} ];
        const user = {name: 'John Doe', photo: '/assets/img/profile_small.jpg'}
        return (
            <div className="viewport">
                <Sidebar user={user} fields={fields} />
                <Header />
                <div className="body">
                    <h1>Auth</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

