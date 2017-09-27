import React from 'react';

const title = function (props) {
    if (props.titleContent) {
        return props.titleContent;
    } else {
        if (props.title) {
            return <h5>{ props.title }</h5>;
        }
    }

    return null;
};

export default title;