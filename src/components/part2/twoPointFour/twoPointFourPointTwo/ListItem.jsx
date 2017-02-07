import React from 'react';

const ListItem = ({ checked, text, onChange }) => (
  <li>
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{text}</span>
  </li>
);

ListItem.propTypes = {
  checked  : React.PropTypes.bool,
  text     : React.PropTypes.string,
  onChange : React.PropTypes.func,
};

ListItem.defaultProps = {
  checked : false,
  text    : '',
};

export default ListItem;
