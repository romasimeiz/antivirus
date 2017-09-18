import React, { Component } from 'react';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import PageHeading from '../Common/PageHeading';
import AppNotification from '../AppNotification'
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
        if (nextProps.location !== this.props.location) {
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
        const {handleLogout, auth, notification} = this.props;

        document.body.classList.toggle('mini-navbar', !this.state.show);
        document.body.classList.toggle('body-small', this.state.width <= BODY_SMALL_WIDTH);

        return (
            <div className="viewport">
                <AppNotification properties={ notification } />
                <Sidebar user={ auth.user } fields={ auth.sideBar } show={ this.state.show } />
                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <Header handleLogout={ handleLogout } toggle={ this.toggleSidebar } />
                    <PageHeading />
                    <div className="body">
                        <h1>Auth</h1>
                        { this.props.children }
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

