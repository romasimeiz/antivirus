import React, { Component } from 'react';

const titleRow = function (props) {
    let actions = (props.setActions ? <th>Actions</th> : null);
    return (
        <tr>
            { props.fields.map((value) => {
                let key = value.mapping;
                let className = '';

                if (props.isSortable(key)) {
                    className = props.sortingRowNameClass + (props.sortKey === key ? '_' + props.sortMethod : '');
                }

                return (
                    <th className={ className } key={ `${props.name}_cell_${key}` } onClick={ () => props.sortFunction(key) }>{ value.name }</th>
                );
            }) }
            { actions }
        </tr>
    );
};

export default titleRow;