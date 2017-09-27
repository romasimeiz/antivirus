import React, { Component } from 'react';
import Head from './head';
import Body from './body';
import Foot from './foot';

const table = function (props) {
    let className = props.defaultClass;

    if (props.tableStyle) {
        if (props.tableStyle instanceof Array) {
            props.tableStyle.forEach(function (item) {
                className += ' ' + item;
            });
        } else {
            className += ' ' + props.tableStyle;
        }
    }

    if (props.thead === false) {
        className += ' ' + props.withoutRowNamesClass;
    }

    if (props.sortFunction) {
        className += ' ' + props.sortFunctionClass;
    }
    
    return (
        <table className={ className }>
            <Head { ...props } />
            <Body { ...props } />
            <Foot { ...props } />
        </table>
    );
};

export default table;