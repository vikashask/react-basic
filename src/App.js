import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import Sidebar from './components/layout/Sidebar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Header/>
              <Sidebar/>
              <div className={'rightContentContainer'}>
                    <div className="leftContentContainer">
                    <Switch>
                        <Route path='/' Component={Home} exact/>
                        <Route path='/about-us' component={AboutUs} />
                        <Route path='/contact-us' component={AboutUs} />

                    </Switch>
                    </div>
                </div>
              
          </div>
      </Router>
  );
  }
}

export default App;
