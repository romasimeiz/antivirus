import React, { Component } from 'react';

import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import './style.scss';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    toggleSidebar = () => {
        this.setState({show: !this.state.show});
    };

    render() {
        const {handleLogout, auth} = this.props;
        return (
            <div className={"viewport " + (this.state.show ? '' : 'mini-navbar')}>
                <Sidebar user={auth.user} fields={auth.sideBar}/>
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <Header handleLogout={handleLogout} toggle={this.toggleSidebar}/>
                    <div className="body">
                        <h1>Auth</h1>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

