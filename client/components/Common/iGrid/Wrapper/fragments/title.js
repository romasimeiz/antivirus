import React from 'react';

const title = function (props) {
    if (!props.title) {
        return null;
    }

    return <h5>{ props.title }</h5>;
};

export default title;