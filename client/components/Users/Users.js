import React from 'react';
import BaseGrid from '../Base/BaseGrid';
import Actions from './actions';

export default class extends BaseGrid {
    constructor(props){
        super(props);
    }

    setActions(data) {
        return <Actions { ...data } />
    }

    render() {
        return super.render();
    }
}
