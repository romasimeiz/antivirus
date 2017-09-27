import React from 'react';
import SpinnerBase from '../SpinnerBase';
import Spinner from './fragments/spinner';

export default class extends SpinnerBase {
    getView() {
        return <Spinner />
    }
}
