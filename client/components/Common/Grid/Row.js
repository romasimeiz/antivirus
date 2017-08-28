import React from 'react';
import PropTypes from 'prop-types';

export default function Row({children}) {
  return (
    <tr>{children}</tr>
  );
}

Row.displayName = 'Row';

Row.propTypes = {
  children: PropTypes.node.isRequired
};