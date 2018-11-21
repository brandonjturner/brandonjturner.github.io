import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
          <div class="hname" style= {{  }}>
          <h1>Brandon J Turner</h1>
          </div>
          <div class="job" style= {{ }}>
          <h2>Full Stack Developer</h2>
          </div>
          </div>
          <div class="social" style= {{ float:"right" }}>
            <a href="https://www.linkedin.com/in/brandonjturner" class="fa fa-linkedin"></a>
            <a href="https://www.github.com/brandonjturner" class="fa fa-github"></a>
          </div>
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