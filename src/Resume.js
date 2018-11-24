import React, { Component } from "react";
import spdf from "simple-react-pdf";
class Resume extends Component {
  render() {
    return (
        <spdf.SimplePDF file="./assets/pdf/resume.pdf"/>
    );
  }
}
export default Resume;