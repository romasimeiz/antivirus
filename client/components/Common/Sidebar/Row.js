import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SecondLevelMenu from './SecondLevelMenu';

/**
 * Check link for active
 *
 * @param {string} match
 * @param {object} location
 * @returns {boolean}
 */
const checkLinkForActive = (match, location) => {
    return !!~location.pathname.toLowerCase().indexOf(match.toLowerCase());
};

/**
 * Check link for active
 *
 * @param {object} match
 * @param {object} location
 * @returns {boolean}
 */
const checkNavLinkForActive = (match, location) => {
    if (!match) {
        return false;
    }

    return checkLinkForActive(match.path, location);
};

export default function Row({className, name, childrens}) {
    return (
        <li className={ checkLinkForActive(name, location) ? 'active' : '' }>
            <NavLink activeClassName="active" to={ `/${name.toLowerCase()}` } isActive={ checkNavLinkForActive }>
                <i className={ className } aria-hidden="true"/>
                <span className="nav-label">{ name }</span>
                {
                    childrens ?
                    <span className="fa arrow" />
                    : null
                }
            </NavLink>
            {
                childrens ?
                <SecondLevelMenu childrens={ childrens } /> : null
            }
        </li>
    )
}

Row.displayName = 'Row';

Row.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};