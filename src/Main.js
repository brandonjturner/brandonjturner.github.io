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
          <h1>Brandon J Turner</h1>
          </div>
          <div class="social" style= {{ float:"right" }}>
            <a href="https://www.linkedin.com/in/brandonjturner" class="fa fa-linkedin"></a>
            <a href="https://www.github.com/brandonjturner" class="fa fa-github"></a>
          </div>
          <ul className="navlinks" >
            <li><NavLink exact to="/"><h3>About</h3></NavLink></li>
            <li><NavLink to="/portfolio"><h3>Portfolio</h3></NavLink></li>
            <li><NavLink to="/contact"><h3>Contact</h3></NavLink></li>
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