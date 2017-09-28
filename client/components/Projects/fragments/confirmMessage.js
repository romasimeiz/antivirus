import React from 'react';

const confirmMessage = function (props) {
    return (
        <div>
            <div>You try to delete project <b>«{ props.projectName }»</b></div>
            <div>Are you sure?</div>
        </div>
    );
};

export default confirmMessage;