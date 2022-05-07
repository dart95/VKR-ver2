import * as React from "react";
//import { useEffect } from "react";
import "../App.css";
import Navibar from "./Navibar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import cheerio from "cheerio";
//mport axios from "axios";
import Home from "./Home";
import Actual from "../Components/Actual";
import Sports from "./Sports";
import { Account } from "./Account";
import Registrationpage from "./Registrationpage";

function App(props) {
  //useEffect(() => {
  // fetch("https://kakoyprazdnik.com/", {
  // mode: "cors",
  //});
  //.then((resp) => resp.json())
  //.then((conf) => {});
  // }, []);

  //const axios = require("axios");
  //const cheerio = require("cheerio");

  /*axios.get("https://kakoyprazdnik.com/").then((data) => {
    const $ = cheerio.load(data.data);
    const text = "";
    $("#bloktxt > h4").each((i, elem) => {
      text += `${$(elem).text()}\n`;
    });
    console.log(text);
  });*/

  const tank = {
    link1: "https://ria.ru/",
    link2: "https://www.kommersant.ru/",
    link3:
      "https://tass.ru/?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com",
    link4: "https://www.spb.kp.ru/",
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar />
        <Switch>
          <Route exact path="/">
            <Home link={tank} />
          </Route>
          <Route path="/actual">
            <Actual />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/registration">
            <Registrationpage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
