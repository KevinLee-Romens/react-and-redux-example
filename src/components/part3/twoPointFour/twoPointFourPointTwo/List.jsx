import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

  static defaultProps = {
    list         : [],
    onItmeChange : () => {},
  }

  static propTypes = {
    list         : React.PropTypes.arrayOf(React.PropTypes.shape()),
    onItemChange : React.PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.state = {
      list: props.list,
    };
  }

  handleItemChange = (item) => {
    const { list } = this.state;

    this.setState({
      list: list.map(prevItem => ({
        text    : prevItem.text,
        checked : prevItem.text === item.text ?
          !prevItem.checked : prevItem.checked,
      })),
    });

    this.props.onItemChange(item);
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <ListItem
              key={`list-${index}`}
              text={item.text}
              checked={item.checked}
              onChange={() => this.handleItemChange(item)}
            />
          ))}
        </ul>
      </div>
    );
  }

}

export default List;
