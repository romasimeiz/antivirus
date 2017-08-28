import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SidebarHeader extends Component {
    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        return (
            <li className="nav-header">
                <div className="dropdown profile-element">
                    <span>
                        <img width="40" height="40" className="img-circle" src={this.props.url}/>
                    </span>
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="clear">
                            <span className="block m-t-xs"> <strong
                                className="font-bold">{this.props.name}</strong></span>
                        </span>
                    </a>
                </div>
                <div className="logo-element">
                    AV
                </div>
            </li>
        );
    }
}

SidebarHeader.displayName = 'SidebarHeader';