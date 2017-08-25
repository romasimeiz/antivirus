import React, { Component } from 'react';
import Header from './Header';
import './style.scss';
import Row from './Row';

export default class Sidebar extends Component {
    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <Header url={this.props.user.photo} name={this.props.user.name}/>
                        {
                            this.props.fields.map((field, index) => {
                                return (
                                    <Row
                                        name={field.name}
                                        key={`th${index}`}
                                        className={field.className}
                                    />
                                );
                            })
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}
Sidebar.displayName = 'Sidebar';