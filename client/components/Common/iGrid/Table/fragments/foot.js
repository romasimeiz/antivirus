import React from 'react';
import RowNames from './rowNames';

const foot = function (props) {
    if (props.tfoot === true) {
        return (
            <tfoot>
                <RowNames { ...props } name="tfoot" />
            </tfoot>
        );
    }

    return null;
};

export default foot;