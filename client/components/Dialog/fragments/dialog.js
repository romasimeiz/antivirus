import React from 'react';

const dialog = function (props) {
    if (!props.isActive) {
        return null;
    }

    return (
        <div className={ props.className }>
            <div className={ props.modalClass }>
                <div className={ props.dialogClass }>
                    <div className={ props.contentClass }>
                        <div className={ props.headerClass }>
                            <button
                                className={ props.closeClass }
                                onClick={ props.hide }
                            >
                                <span>×</span>
                            </button>
                            <h3>{ props.title }</h3>
                        </div>
                        <div className={ props.bodyClass }>
                            { props.content }
                        </div>
                        <div className={ props.footerClass }>
                            <button className={ props.closeBtnClass } onClick={ props.hide }>{ props.closeBtnText }</button>
                            <button className={ props.confirmBtnClass } onClick={ () => {props.hide(); props.confirm()} }>{ props.confirmBtnText }</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ props.backdropClass }></div>
        </div>
    );
};

export default dialog;