import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import CellHeader from './CellHeader';
import CellBody from './CellBody';
import _ from 'lodash';

import './style.scss';


const buildRow = (fields, row, rowIndex) => {
    console.log('Class Name: ', row.className);
    return (
        <Row
            key={`row${rowIndex}`}
            onClick={row.link ? () => {window.location.href=row.link} : () => {return false} }
            className={row.className}
        >
            {
                fields.map((field, cellIndex) =>
                {
                    return <CellBody
                        text={ _.get(row, field.mapping) }
                        className={ field.className }
                        key={ `cell${cellIndex}` }
                    />
                })
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
                    { data.data ? buildBody(fields, data.data) : null }
                    {children}
                </table>
            </div>
        );
    }
}
