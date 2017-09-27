import React from 'react';

const spinner = function () {
    return (
        <div className="spinner-wrapper">
            <div className="sk-spinner sk-spinner-wave">
                <div className="sk-rect1"></div>
                <div className="sk-rect2"></div>
                <div className="sk-rect3"></div>
                <div className="sk-rect4"></div>
                <div className="sk-rect5"></div>
            </div>
        </div>
    );
};

export default spinner;
