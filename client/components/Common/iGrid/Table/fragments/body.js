import React from 'react';
import _ from 'lodash';

const body = function (props) {
    if (props.data) {
        return (
            <tbody>
            { props.data.map((row, rowIndex) => {
                let actions = (props.setActions ? <td className={ props.actionsClassName }>{ props.setActions(row) }</td> : null);
                return (
                    <tr key={ `tbody_row_${rowIndex}` }>
                        { props.fields.map((field, cellIndex) => {
                            let value = _.get(row, field.mapping);
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

    return null;
};

export default body;