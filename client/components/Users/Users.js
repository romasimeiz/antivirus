import React from 'react';
import BaseComponent from '../Base/BaseComponent';
import Grid from '../Common/iGrid';
import BoxWrapper from '../Common/BoxWrapper';
import { SpinnerWave } from '../Common/Spinner';
import Actions from './fragments/actions';
import Title from './fragments/title';

export default class extends BaseComponent {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        this.props.getData();
    }

    render() {
        return (
            <BoxWrapper
                { ...this.props }
                titleContent={ <Title { ...this.props } /> }
            >
                <SpinnerWave show={ this.props.isFetching } />
                <Grid
                    { ...this.props }
                    tableStyle={ Grid.tableStyle.HOVER }
                    getData={(data) => this.props.getData(data)}
                    setActions={ (data) => <Actions { ...data } /> }
                />
            </BoxWrapper>
        );
    }
}
