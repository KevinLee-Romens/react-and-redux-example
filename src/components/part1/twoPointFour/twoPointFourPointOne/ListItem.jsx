import React from 'react';

const ListItem = ({ value }) => (
  <li>
    <span>{value}</span>
  </li>
);

ListItem.propTypes = {
  value: React.PropTypes.string,
};

export default ListItem;
