import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import UseMemoMain from "./components/hook/example1/useMemo/UseMemoMain";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import PageNotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Sidebar />
          <div className={"rightContentContainer"}>
            <div className="leftContentContainer">
              <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/about-us" component={AboutUs} />
                <Route path="/use-memo" component={UseMemoMain} />
                <Route path="/contact-us" component={AboutUs} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
