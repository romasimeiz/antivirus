import React, { Component } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import AppNotification from '../AppNotification'
import './style.scss';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {show: true};
    }

    toggleSidebar = () => {
        this.setState({show: !this.state.show});
    };

    componentWillMount() {
        this.props.checkAuthentication();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.props.checkAuthentication();
        }
    }

    render() {
        const {handleLogout, auth, notification} = this.props;
        console.log('message', notification.message);
        return (
            <div className={"viewport " + (this.state.show ? '' : 'mini-navbar')}>
                <AppNotification properties={notification} />
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

