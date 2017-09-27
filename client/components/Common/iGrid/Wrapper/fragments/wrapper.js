import React from 'react';
import Header from './header';

const wrapper = function (props) {
    let className = props.wrapperClass;
    let contentClassName = props.contentClass + (props.showContent ? '' : ' ' + props.hideClass);
    let spinner = null;

    if (props.dataLoading === true) {
        if (props.spinner) {
            spinner = props.spinner;
        } else {
            spinner = <span className={ props.spinnerClass } />;
        }
    }

    if (!props.title) {
        className += ' ' + props.withoutTitleClass;
    }

    return (
        <div className={ className }>
            <Header { ...props } />
            <div className={ contentClassName } >
                { spinner }
                { props.children }
            </div>
        </div>
    );
};

export default wrapper;