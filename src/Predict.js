import React, { Component } from "react";
 
var imageName = require('./images/attention_test_data.png')

class Predict extends Component {
  render() {
    return (
      <div>
        <h2>PREDICTION</h2>
        <p>Prediction Result</p>
        <img src={ imageName } />
      </div>
    );
  }
}
 
export default Predict;