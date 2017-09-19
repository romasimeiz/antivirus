import React, { Component } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Content from '../Common/Content';
import Footer from '../Common/Footer';
import PageHeading from '../Common/PageHeading';
import AppNotification from '../AppNotification';


import './style.scss';

const NAVBAR_STORAGE_KEY = 'navbar';
const BODY_SMALL_WIDTH = 768;

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: (JSON.parse(window.localStorage.getItem(NAVBAR_STORAGE_KEY)) === false ? false : true),
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    toggleSidebar = () => {
        let navbar = !this.state.show;
        this.setState({show: navbar});
        window.localStorage.setItem(NAVBAR_STORAGE_KEY, navbar)
    };

    componentWillMount() {
        this.props.checkAuthentication();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.checkAuthentication();
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', () => this.updateWindowDimensions());
    }

    componentWillUnmount() {
        window.removeEventListener('resize', () => this.updateWindowDimensions());
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const {handleLogout, auth, notification, router} = this.props;
        let bodyClassName = 'viewport pace-done body';

        if (!this.state.show) {
            bodyClassName += ' mini-navbar';
        }

        if (this.state.width <= BODY_SMALL_WIDTH) {
            bodyClassName += ' body-small';
        }

        return (
            <div className={ bodyClassName }>
                <AppNotification properties={ notification } />
                <Sidebar user={ auth.user } fields={ auth.sideBar } show={ this.state.show } />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <Header handleLogout={ handleLogout } toggle={ this.toggleSidebar } />
                    <PageHeading router={router} />
                    <Content>{ this.props.children }</Content>
                    <Footer />
                </div>
            </div>
        );
    }
}

