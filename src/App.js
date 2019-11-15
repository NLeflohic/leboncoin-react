import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Footer from "./components/Footer";

import "./reset.css";
import './App.css';

function App() {
  const [currentOffer, setCurrentOffer] = useState({});

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/offer/:id">
            <Offer currentOffer={currentOffer} />
          </Route>
          <Route path="/">
            <Home currentOfferFunc={setCurrentOffer} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
