import React, { Component } from 'react';
import Header from './header';

const wrapper = function (props) {
    let className = props.wrapperClass;

    if (!props.title) {
        className += ' ' + props.withoutTitleClass;
    }

    return (
        <div className={ className }>
            <Header { ...props } />
            <div className={ props.contentClass + (props.showContent ? '' : ' ' + props.hideClass) } >
                { props.children }
            </div>
        </div>
    );
};

export default wrapper;