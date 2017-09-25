import React from 'react';
import { NavLink } from 'react-router-dom';

export default function View({ link, children }) {
    return (
        <NavLink activeClassName="active" to={ link }>
            <span className='fa fa-eye' > </span>
        </NavLink>
    );
}