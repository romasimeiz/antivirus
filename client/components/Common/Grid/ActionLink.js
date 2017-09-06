import React from 'react';
import PropTypes from 'prop-types';

export default function ActionLink({ type, title, link, children }) {

    const iconFromType = {
        update: 'fa fa-pencil',
        view  : 'fa fa-eye',
        delete: 'fa fa-trash',
    };

    return (
        <a href={link} title={title}>
            <span className={iconFromType[type]} > </span>
        </a>
    );
}

ActionLink.propTypes = {
    type : PropTypes.string.isRequired,
    link : PropTypes.string.isRequired,
    title : PropTypes.string
};

ActionLink.displayName = 'Action Link';
