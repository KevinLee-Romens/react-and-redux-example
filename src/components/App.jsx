import React from 'react';
import logo from 'Media/logo.svg';
import CSSModules from 'react-css-modules';
import styles from './app.scss';

const App = ({ children }) => (
  <div styleName="App">
    <div styleName="App-header">
      <img src={logo} styleName="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    {children }
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default CSSModules(App, styles);
