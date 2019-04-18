import React, { Component } from "react";

var imageName = require('./images/loss_curve.png')

class Train extends Component {
  render() {
    return (
      <div>
        <h2>TRAIN</h2>
        <p>Training result</p>
        <img src={ imageName } />
      </div>
    );
  }
}
 
export default Train;


