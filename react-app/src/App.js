import { Container } from "reactstrap";
import React, { Component } from "react";
import Header from "./components/header";
import Map from "./components/Map";
// import ReactMapGL from "react-map-gl";
import "./App.css";

require("dotenv").config();

//creating the state - which is the app name then passed it through props down
//to the render function and put it in a variable called appName which we will use in
//header js to change the app Name.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { applicationName: "TaxiMap" };
  }
  render() {
    return (
      <div>
        <Header appName={this.state.applicationName} />
        <Container>
          <Map />
        </Container>
      </div>
    );
  }
}

export default App;
