import React from 'react';
import BaseGrid from '../Base/BaseGrid';
import Actions from './fragments/actions';
import Title from './fragments/title';

export default class extends BaseGrid {
    constructor(props){
        super(props);
    }

    setActions(data) {
        return <Actions { ...data } />
    }

    titleContent() {
        return <Title { ...this.props } />;
    }

    render() {
        return super.render();
    }
}
