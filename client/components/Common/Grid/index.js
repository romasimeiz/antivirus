import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Row from './Row';
import CellHeader from './CellHeader';
import CellBody from './CellBody';
import Actions from './Actions';
import _ from 'lodash';

import './style.scss';


const buildRow = (fields, row, rowIndex, actions) => {
    return (
        <Row
            key={`row${rowIndex}`}
            onClick={row.link ? () => {window.location.href=row.link} : () => {return false} }
            className={row.className} >
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
            <Actions entityId={row.id} actions={actions} />
        </Row>
    );
};

const buildBody = (fields, data, actions) => {
    return (
        <Body>
        {
            data.map((row, index) => buildRow(fields, row, index, actions))
        }
        </Body>
    );
};

export default class Grid extends Component {
    render() {
        const {fields, data, children, actions} = this.props;
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
                            { actions ?  <CellHeader text={'Actions'} /> : false }
                        </Row>
                    </Header>
                    { data.data ? buildBody(fields, data.data, actions) : null }
                    {children}
                </table>
            </div>
        );
    }
}
