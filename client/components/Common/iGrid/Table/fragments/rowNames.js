import React, { Component } from 'react';

const titleRow = function (props) {
    let actions = (props.setActions ? <th>Actions</th> : '');
    return (
        <tr>
            { Object.values(props.fields).map((value, cellIndex) => {
                let key = Object.keys(props.fields)[cellIndex];
                let className = '';

                if (props.isSortable(key)) {
                    className = 'sorting' + (props.sortKey === key ? '_' + props.sortMethod : '');
                }

                return (
                    <th className={ className } key={ `${props.name}_cell_${cellIndex}` } onClick={ () => props.sortFunction(key) }>{ value }</th>
                );
            }) }
            { actions }
        </tr>
    );
};

export default titleRow;