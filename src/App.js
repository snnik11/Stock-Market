import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Quote from "./components/Quote";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/">
            {/* only home has exact path */}
            <Home />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/quote/:LinkQuery">
            <Quote />
          </Route>
          {/* <Route path="/pricehistory">
            <PriceHistory />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
