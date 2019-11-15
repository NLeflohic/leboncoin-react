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
  const limit = 3;

  const [offers, setOffers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState();
  const [currentOffer, setCurrentOffer] = useState({});

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setCount(response.data.count);
    setOffers(response.data.offers);
  }

  useEffect(() => {
    const pageToFetch = currentPage * limit;
    const url = "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" + pageToFetch + "&limit=" + limit;
    fetchData(url);
  }, [currentPage]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/offer">
            <Offer currentOffer={currentOffer} />
          </Route>
          <Route path="/">
            <Home offers={offers} limit={limit} count={count}
              currentPage={currentPage} currentPageFunc={setCurrentPage} currentOfferFunc={setCurrentOffer} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
