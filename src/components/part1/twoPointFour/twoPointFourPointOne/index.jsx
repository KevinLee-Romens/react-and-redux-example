import React from 'react';
import List from './List';

class TwoPointFourPointOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        text: '列表一',
      }, {
        text: '列表二',
      }],
    };
  }

  render() {
    const { list } = this.state;

    return (
      <List list={list} />
    );
  }
}

export default TwoPointFourPointOne;
