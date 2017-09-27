import React, { Component } from 'react';
import RowNames from './rowNames';

const head = function (props) {
    if (props.thead !== false) {
        return (
            <thead>
                <RowNames { ...props } name="thead" />
            </thead>
        );
    }

    return null;
};

export default head;