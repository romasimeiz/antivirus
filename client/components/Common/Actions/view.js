import React from 'react';
import { NavLink } from 'react-router-dom';

export default function View({ link, children }) {
    return (
        <NavLink activeClassName="active" className="btn btn-info btn-xs" to={ link }>
            <i className='fa fa-eye' />
            <span> View</span>
        </NavLink>
    );
}