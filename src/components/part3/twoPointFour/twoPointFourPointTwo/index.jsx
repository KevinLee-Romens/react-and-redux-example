import React from 'react';
import List from './List';

class TwoPointFourPointTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [{
        text    : '列表一',
        checked : false,
      }, {
        text    : '列表二',
        checked : true,
      }, {
        text    : '列表三',
        checked : false,
      }],
    };
  }

  handleChange = (item) => {
    console.log(item);
  }

  render() {
    const { list } = this.state;

    return (
      <List list={list} onItemChange={this.handleChange} />
    );
  }

}

export default TwoPointFourPointTwo;
