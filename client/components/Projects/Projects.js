import React from 'react';
import BaseGrid from '../Base/BaseGrid';
import Actions from './actions';

export default class extends BaseGrid {
    constructor(props){
        super(props);
    }

    deleteClickHandler(data) {
        this.props.dialogShow('You try to delete project ' + data.name + '. Are you sure?', () => this.props.deleteProject(data.id));
    }

    setActions(data) {
        return <Actions { ...data } deleteClickHandler={ () => this.deleteClickHandler(data) } />
    }

    render() {
        return super.render();
    }
}
