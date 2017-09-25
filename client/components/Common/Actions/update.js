import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Update({ link, children }) {
    return (
        <NavLink activeClassName="active" className="btn btn-warning btn-xs" to={ link }>
            <i className='fa fa-pencil' />
            <span> Edit</span>
        </NavLink>
    );
}