import React from 'react';
import { Edit, View, Delete } from '../Common/Button';

const actions = function (props) {
    let link = `/projects/${ props.id }/`;

    return (
        <div className="btn-group btn-group-xs">
            <View link={ props.link } />
            <Edit link={ `${link}update` } />
            <Delete onClick={ props.deleteClickHandler } />
        </div>
    );
};

export default actions;