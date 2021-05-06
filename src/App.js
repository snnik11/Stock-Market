import "./App.css";
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Quote from "./components/Quote";

import PriceHistory from "./components/PriceHistory";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Search onSubmit={setSearch} /> */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/stocks">
            <Stocks />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/pricehistory">
            <PriceHistory />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
