import React from 'react';
import { Create } from '../../Common/Button';

const title = function (props) {
    return (
        <div>
            <h5>{ props.title }</h5>
            <Create link="/users/create" />
        </div>
    );
};

export default title;