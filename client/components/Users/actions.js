import React, { Component } from 'react';
import Update from '../Common/Actions/update';
import View from '../Common/Actions/view';
import Delete from '../../containers/Delete';

const actions = function (data) {
    let link = `/users/${ data.id }/`;

    return (
        <div className="actions">
            <View key={ 'view_btn_' + data.id } type="view"  link={ link + 'view' } />
            <Update key={ 'update_btn_' + data.id } type="update" link={ link + 'update' } />
        </div>
    );
};

export default actions;