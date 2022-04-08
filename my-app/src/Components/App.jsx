import * as React from "react";
import "../App.css";
import Navibar from "./Navibar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import { Actual } from "../Components/Actual";
import { Sports } from "./Sports";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/actual">
            <Actual />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
