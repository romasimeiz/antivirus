import React from 'react';
import Title from './title';
import Options from './options';

const header = function (props) {
    if (!props.title && !props.options) {
        return null;
    }

    return (
        <div className={ props.headerClass }>
            <Title { ...props } />
            <Options { ...props } />
        </div>
    );
};

export default header;