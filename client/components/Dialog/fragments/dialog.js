import React from 'react';

const dialog = function (props) {
    let classNameModal = 'modal inmodal fade in';
    let classNameBackdrop = 'modal-backdrop fade in';

    if (!props.isActive) {
        return null;
    }

    return (
        <div>
            <div className={ classNameModal } style={{display: 'block'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={ props.hide }><span>×</span><span className="sr-only">Close</span></button>
                            <h4 className="modal-title">{ props.title }</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-white" data-dismiss="modal" onClick={ props.hide }>Close</button>
                            <button type="button" className="btn btn-primary" onClick={ () => {props.hide(); props.confirm()} }>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ classNameBackdrop } onClick={ props.hide }></div>
        </div>
    );
};

export default dialog;