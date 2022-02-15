import React, { Component } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ticTacToe" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
