import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

export default function SecondLevelMenu({childrens}) {
    return (
        <ul className="nav nav-second-level collapse in">
        {
                childrens.map((field, index) => {
                    return(
                        <Row
                            name={field.name}
                            key={`li${index}`}
                            className={field.className}
                        />
                    )
                })
            }
        </ul>
    )
}

SecondLevelMenu.displayName = 'Second Level Menu';

SecondLevelMenu.propTypes = {
    childrens: PropTypes.array.isRequired
};