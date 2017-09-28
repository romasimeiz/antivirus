import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './icon';

const button = function (props) {
    let className = props.defaultClass;
    let buttonContent = props.children ? props.children : props.name;


    if (props.className) {
        className += ' ' + props.className;
    }

    if (props.link) {
        return (
            <NavLink
                className={ className }
                to={ props.link }
                disabled={ props.disabled }
            >
                <Icon { ...props } />
                <span>{ buttonContent }</span>
            </NavLink>
        );
    }

    return (
        <button
            className={ className }
            onClick={ props.onClick ? props.onClick : null }
            disabled={ props.disabled }
        >
            <Icon { ...props } />
            <span>{ buttonContent }</span>
        </button>
    );
};

export default button;