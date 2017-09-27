import React from 'react';
import { Edit, View } from '../../Common/Button';

const actions = function (data) {
    let link = `/users/${ data.id }/`;

    return (
        <div className="btn-group btn-group-xs">
            <View link={ link + 'view' } />
            <Edit link={ link + 'update' } />
        </div>
    );
};

export default actions;