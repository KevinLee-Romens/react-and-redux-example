import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Layout, Menu, Breadcrumb } from 'antd';
import logo from 'Media/logo.svg';
import { NAVIGATION } from 'Constants';
import NavLink from '../NavLink';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

function getSelectedKeys(pathname) {
  const selectedKeys = [];
  NAVIGATION.forEach((item, index) => {
    const activeIndex = item.children.findIndex(child =>
      child.path === pathname);
    if (activeIndex >= 0) {
      selectedKeys.push(`sub-${index}`, `sub-${index}-${activeIndex}`);
    }
  });
  return selectedKeys;
}

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  static propTypes = {
    children : PropTypes.node,
    location : PropTypes.shape({
      pathname : PropTypes.string,
      state    : PropTypes.shape({
        selectedKeys: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
  }

  constructor(props) {
    super(props);

    // const activeIndex = NAVIGATION.findIndex(item =>
    //   item.path === props.location.pathname);

    this.state = {
      collapsed    : false,
      selectedKeys : getSelectedKeys(props.location.pathname),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return;
    }

    this.setState({
      selectedKeys: getSelectedKeys(nextProps.location.pathname),
    });
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  renderMenuItems = () => (
    NAVIGATION.map((item, index) => (
      /* eslint-disable */
      <SubMenu
        key={`sub-${index}`}
        title={
          <NavLink to={item.path}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.title}</span>
          </NavLink>
        }
      >
        {item.children.map((child, idx) => (
          <Menu.Item key={`sub-${index}-${idx}`}>
            <NavLink to={child.path}>
              <span className="nav-text">{child.title}</span>
            </NavLink>
          </Menu.Item>
        ))}
      </SubMenu>
    ))
  )

  render() {
    const { children } = this.props;
    const { selectedKeys } = this.state;

    return (
      <Layout>
        <Sider>
          <div className="logo-root">
            <Link to="/home"><img src={logo} className="logo" alt="logo" /></Link>
          </div>
          <Menu
            theme="dark"
            mode="vertical"
            selectedKeys={selectedKeys}
          >
            {this.renderMenuItems()}
          </Menu>
        </Sider>
        <Layout>
          <Header className="layout-header">React and Redux - Example codes</Header>
          <Content className="layout-content-wrapper">
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="layout-content" >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
