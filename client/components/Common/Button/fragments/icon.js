import React from 'react';

const icon = function (props) {
    if (props.iconClass) {
        return <i className={ props.iconClass } />;
    }

    return null;
};

export default icon;