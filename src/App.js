import React, { Component } from 'react';
// import logo from './logo.svg';
// import { Button } from 'antd-mobile'
import { Button } from 'antd-mobile-v2';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import './App.css';
import Home from "./pages/Home"
import CityList from "./pages/CityList"



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 配置导航菜单 */}
          <ul>
            <li><Link to="/home">首页</Link></li>
            <li><Link to="/citylist">城市首页</Link></li>
          </ul>


          {/* 配置路由 */}
          <Route path="/home" component={Home} ></Route>
          <Route path="/citylist" component={CityList} ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
