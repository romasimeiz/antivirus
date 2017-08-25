import React from 'react';
import {Link} from 'react-router';

export default function Row({className, name}) {
    return (
        <li>
            <Link  activeClassName="active" to={name.toLowerCase()} >
                <i className={className} aria-hidden="true"/>
                {name}
            </Link>
        </li>
    )
}

Row.displayName = 'Row';

Row.propTypes = {
    className: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
};