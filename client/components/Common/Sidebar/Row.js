import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Row({className, name}) {
    return (
        <li>
            <NavLink activeClassName="active" to={`/${name.toLowerCase()}`}>
                <i className={className} aria-hidden="true"/>
                <span className="nav-label">  {name}</span>
                <span className="fa arrow"/>
            </NavLink>
        </li>
    )
}

Row.displayName = 'Row';

Row.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};