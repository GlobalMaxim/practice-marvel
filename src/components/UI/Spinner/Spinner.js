import React, { Component } from "react";
import ReactSpinner from "react-bootstrap/Spinner";

class Spinner extends Component {
  render() {
    return (
      //And use wherever you want...
      <ReactSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </ReactSpinner>
    );
  }
}

export default Spinner;
