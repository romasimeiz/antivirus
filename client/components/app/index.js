import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

export default function App({children}) {
    return (
        <div>
            {children}
        </div>
    );
}
App.propTypes = {
    children: PropTypes.element.isRequired
};
