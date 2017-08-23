import React, { Component } from 'react';
import { connect } from 'react-redux';

// import Sidebar from '../../components/Sidebar';
// import Header from '../../components/Header';
import './style.scss';

export default class Auth extends Component {
    render() {
        const {
        } = this.props;
        return (
            <div className="viewport">
                {/*<Sidebar user={auth.user} fields={sideBar}/>*/}
                {/*<Header/>*/}
                <div className="body">
                    <h1>Auth</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

