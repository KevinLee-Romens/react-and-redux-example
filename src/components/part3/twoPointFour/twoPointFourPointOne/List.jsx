import React from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';

const List = ({ list, title }) => (
  <div>
    <ListTitle title={title} />
    <ul>
      {list.map((item, index) => (
        <ListItem key={`list-${index}`} value={item.text} />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  list  : React.PropTypes.arrayOf(React.PropTypes.shape()),
  title : React.PropTypes.string,
};

export default List;
