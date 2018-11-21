import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./Home";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Brandon J Turner</h1>
          <ul className="navlinks">
            <li><NavLink exact to="/">About</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;