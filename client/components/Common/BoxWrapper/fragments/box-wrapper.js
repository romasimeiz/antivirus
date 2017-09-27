import React from 'react';
import Header from './header';

const wrapper = function (props) {
    let className = props.wrapperClass;
    let contentClassName = props.contentClass + (props.showContent ? '' : ' ' + props.hideClass);

    if (!props.title) {
        className += ' ' + props.withoutTitleClass;
    }

    return (
        <div className={ className }>
            <Header { ...props } />
            <div className={ contentClassName } >
                { props.children }
            </div>
        </div>
    );
};

export default wrapper;