import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Announce from "./containers/Publish";
import Footer from "./components/Footer";
import Cookie from "js-cookie";



import "./reset.css";
import './App.css';

function App() {
  const [currentOffer, setCurrentOffer] = useState({});
  const [connected, setConnected] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    const cookie = Cookie.get("token");
    if (cookie !== undefined) {
      setToken(cookie);
      setConnected(true);
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Header connected={connected} setConnected={setConnected} token={token} setToken={setToken} />
        <Switch>
          <Route path="/publish">
            <Announce token={token} />
          </Route>
          <Route path="/signin" >
            <Signup setConnected={setConnected} setToken={setToken} />
          </Route>
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
