import React from 'react';
import PropTypes from 'prop-types';
import ActionLink from './ActionLink';

export default function Actions({ actions, entityId, children }) {
    return (
        <th>
            {
                actions.types.map( (type, index) => {
                    let link = `/${actions.entity}/${entityId}/${type}`;
                    return <ActionLink key={index} link={link} type={type} />
                })
            }
        </th>
    );
}


Actions.propTypes = {
  actions  : PropTypes.object.isRequired,
  entityId : PropTypes.number.isRequired
};

Actions.displayName = 'Actions';
