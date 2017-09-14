import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondLevelMenu from './SecondLevelMenu';

const checkLinkForActive = (match, location) => {
    if (!match) {
        return false;
    }
    return ~location.pathname.indexOf(match.path) ? true : false;
};

export default function Row({className, name, childrens}) {
    return (
        <li>
            <NavLink activeClassName="active" to={`/${name.toLowerCase()}`} isActive={checkLinkForActive}>
                <i className={className} aria-hidden="true"/>
                <span className="nav-label">  {name} </span>
                {
                    childrens ?
                    <span className="fa arrow" />
                    : null
                }
            </NavLink>
            {
                childrens ?
                <SecondLevelMenu childrens={childrens} /> : null
            }
        </li>
    )
}

Row.displayName = 'Row';

Row.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};