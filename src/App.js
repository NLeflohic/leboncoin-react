import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from "axios";
import Home from "./containers/Home";
import Offer from "./containers/Offer";

import "./reset.css";
import './App.css';

function App() {
  const [offers, setOffers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://leboncoin-api.herokuapp.com/api/offer/with-count");
    setOffers(response.data.offers);
    console.log(response.data.offers);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/">
            <Home offers={offers} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
