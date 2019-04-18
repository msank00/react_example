import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Train from "./Train";
import Predict from "./Predict";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Sequence to Sequence Network</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/train">Train</NavLink></li>
                <li><NavLink to="/predict">Prediction</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/train" component={Train}/>
                <Route path="/predict" component={Predict}/>
            </div>
            </div>
        </HashRouter>
    );
  }
}

export default Main;