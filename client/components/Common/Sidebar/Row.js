import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Row({className, name}) {
    return (
        <li>
            <NavLink activeClassName="active" to={name.toLowerCase()}>
                <i className={className} aria-hidden="true"/>
                {name}
            </NavLink>
        </li>
    )
}

Row.displayName = 'Row';

Row.propTypes = {
    className: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
};