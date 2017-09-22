import React, { Component } from 'react';

const body = function (props) {
    if (props.data) {
        return (
            <tbody>
            { props.data.map((item, rowIndex) => {
                let actions = (props.setActions ? <td>{ props.setActions(item) }</td> : '');
                return (
                    <tr key={ `tbody_row_${rowIndex}` }>
                        { Object.keys(props.fields).map((key, cellIndex) => {
                            let value = item[key];
                            return (
                                <td key={ `tbody_cell_${cellIndex}` }>{ value }</td>
                            );
                        }) }
                        { actions }
                    </tr>
                );
            }) }
            </tbody>
        );
    }
};

export default body;