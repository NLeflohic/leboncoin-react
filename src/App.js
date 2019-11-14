import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Header from "./components/Header";

import "./reset.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
