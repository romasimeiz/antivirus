import React, { Component } from 'react';

const options = function (props) {
    if (!props.options) {
        return null;
    }

    return (
        <div className={ props.optionsClass }>
            <a className={ props.optionsCollapseLinkClass } onClick={ props.toggleContent }>
                <i className={ props.showContent ? props.optionsHideBtnUpClass : props.optionsHideBtnDownClass } />
            </a>
            <a className={ props.optionsCloseLinkClass } onClick={ props.toggleSelf }>
                <i className={ props.optionsCloseBtnClass } />
            </a>
        </div>
    );
};

export default options;