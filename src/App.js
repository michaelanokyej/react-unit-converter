import React, { Component } from "react";
import "./App.css";
import { Home, Temperature, Volume } from "./components";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/temperatures" component={Temperature} />
          <Route exact path="/volumes" component={Volume} />
        </Switch>
      </main>
    );
  }
}

export default App;
