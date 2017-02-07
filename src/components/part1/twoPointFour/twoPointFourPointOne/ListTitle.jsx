import React from 'react';

const ListTitle = ({ title }) => (
  <p>{title}</p>
);

ListTitle.propTypes = {
  title: React.PropTypes.string,
};

export default ListTitle;
