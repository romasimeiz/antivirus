import React, { Component } from 'react';
import SidebarHeader from './SidebarHeader';
import './style.scss';
import Row from './Row';

export default class Sidebar extends Component {

    render() {
        const photo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).photo : this.props.user.photo;
        return (
            <nav className={ "navbar-default navbar-static-side animated" + (this.props.show ? " fadeIn" : "") } role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <SidebarHeader url={ `${API_HOST}${photo}` } name={ this.props.user.name } toggle={ this.toggleSidebar } />
                        {
                            this.props.fields.map((field, index) => {
                                return (
                                    <Row
                                        name={ field.name }
                                        key={ `li${index}` }
                                        className={ field.className }
                                        childrens={ field.childrens }
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