import React, { Component } from 'react';
import _ from 'lodash';
import './style.scss';

export default class AppNotification extends Component {
    render() {
        const {properties, activeClass} = this.props;
        const className = properties.isActive ? activeClass : 'pace-inactive';
        const containerClass = `toast toast-${properties.type}`;
        return (
            <div id="toast-container" className={className} aria-live="polite" role="alert">
                <div className={containerClass} style={{opacity: "0.8"}}>
                    <div className="toast-progress" style={{width: "0%"}}>
                    </div>
                    <div className="toast-message">
                        <b>{ _.upperFirst(properties.type) }!</b><br/>
                        {properties.message}
                    </div>
                </div>
            </div>
        );
    }
}