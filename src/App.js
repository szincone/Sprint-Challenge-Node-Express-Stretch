import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

const URL = "http://localhost:7000/projects/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("PROJECTS", this.state.projects);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul style={{ listStyle: "none" }}>
          {this.state.projects.map(project => {
            return (
              <li style={{ color: "black" }} key={project.id}>
                {project.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
