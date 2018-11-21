import React, { Component } from "react";
class Contact extends Component {
  render() {
    return (
        <div class="container">
          <div style= {{ align: "center"}}>
            <h2>Contact Us</h2>
            <p>Send me a message:</p>
          </div>
          <div class="row">
            <div class="column">
              <img src="map.JPG" style= {{ width: "100%" }} alt="Location"></img>
            </div>
            <div class="column">
              <form action="/action_page.php">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name.."></input>
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email.."></input>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style= {{height:"170px"}}></textarea>
                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Contact;