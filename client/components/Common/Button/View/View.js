import React from 'react';
import BaseButton from '../Button';
import Button from '../fragments/button';
import config from '../config';

export default class extends BaseButton {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button { ...config.button } { ...config.view } { ...this.props } />
        );
    }
}