import React, { Component } from 'react';
import logo from './logo.svg';
// import { Button } from 'antd-mobile'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile-v2';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Button>登录</Button> */}
        {/* <Button disabled>default disabled</Button><WhiteSpace />

        <Button type="primary">primary</Button><WhiteSpace />
        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

        <Button type="warning">warning</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace /> */}
      </div>
    );
  }
}

export default App;
