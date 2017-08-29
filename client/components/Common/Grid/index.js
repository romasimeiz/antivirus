import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import CellHeader from './CellHeader';
import CellBody from './CellBody';
import './style.scss';


const buildRow = (fields, row, rowIndex) => {
    return (
        <Row key={`row${rowIndex}`}>
            {
                fields.map((field, cellIndex) =>
                    <CellBody
                        text={row[field.mapping]}
                        className={field.className}
                        key={`cell${cellIndex}`}
                    />)
            }
        </Row>
    );
};

const buildBody = (fields, data) => {
    return (
        <Body>
        {
            data.map((row, index) => buildRow(fields, row, index))
        }
        </Body>
    );
};

export default class Grid extends Component {
    render() {
        const {fields, data, children} = this.props;
        return (
            <div>
                <table className="table table-bordered">
                    <Header>
                        <Row>
                            {
                                fields.map((field, index) => {
                                    return (
                                        <CellHeader
                                            text={field.name}
                                            key={`th${index}`}
                                            className={field.className}
                                        />
                                    );
                                })
                            }
                            <CellHeader text={'Control Panel'}/>
                        </Row>
                    </Header>
                    {buildBody(fields, data)}
                    {children}
                </table>
            </div>
        );
    }
}
