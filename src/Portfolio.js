import React, { Component } from "react";
class Portfolio extends Component {
  render() {
    return (
      <div>
        <div class="card">
        <h3 class="card-title">Blitz Report</h3>
          <img class="card-img-top" src="./assets/images/blitzreport.jpg" height="90" width="160" alt="Blitz Report"></img>
          <div class="card-body">
            <p class="card-text">A Fantasy Football utility webapp that allows users to track QBs against specific opponents. Built using MERN stack, I designed the interface and assisted with authentication.</p>
            <a href="https://github.com/brandonjturner/project3" class="btn btn-primary">Github</a>
          </div>
        </div>
        
        <div class="card">
        <h3 class="card-title">Van Cool</h3>
          <img class="card-img-top" src="./assets/images/vancool.png" height="90" width="160" alt="Van Cool"></img>
          <div class="card-body">
            <p class="card-text">Web app for easy carpool organization; create new carpools and export the carpool stats in CSV format! I handled backend interaction and client-side scripting. I interfaced with our MySql database with Sequelize to create the functionality of the website, and used Express to serve pages.</p>
            <a href="https://github.com/brandonjturner/project2" class="btn btn-primary">Github</a>
        </div>
      </div>

      <div class="card">
      <h3 class="card-title">THCatalog</h3>
          <img class="card-img-top" src="./assets/images/thcatalog.JPG" height="90" width="160" alt="THCatalog"></img>
          <div class="card-body">
            <p class="card-text">Web app to search for local dispensary and strain information.  Using google maps and Marijuana Dataase API's.</p>
            <a href="https://github.com/brandonjturner/THCatalog" class="btn btn-primary">Github</a>
        </div>
      </div>

      </div>
    );
  }
}
export default Portfolio;