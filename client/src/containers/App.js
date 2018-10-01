import React, { Component } from "react";

import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import "../App.css";

import img from "/Users/jingnili/Desktop/JS/PJs/project2/client/src/img/9150e4e5ly1fkmfb2k0lqj20rs0rstca.jpg";

import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <div>
          <img
            src={img}
            style={{
              width: "60%",
              height: "20%"
            }}
          />
        </div> */}
      </div>
    );
  }
}
export default App;
