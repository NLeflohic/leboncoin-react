import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/leboncoin.svg";
import Login from "./Login";
import Cookie from "js-cookie";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const onConnectionClick = () => {
    if (props.connected === true) {
      Cookie.remove("token");
      props.setConnected(false);
    } else {
      if (showLogin === false) {
        setShowLogin(true);
      } else {

      }
    }
  }

  const onClick = () => {
    const cookie = Cookie.get("token");
    if (cookie === undefined) {
      setShowLogin(true);
    }
  }

  return (
    <>
      {showLogin === true && <Login showLogin={showLogin} setShowLogin={setShowLogin} setConnected={props.setConnected} connected={props.connected} token={props.token} setToken={props.setToken} />}
      <div className="header">
        <div className="wrapper-header">
          <div className="wrapper-menu">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
            <Link to="/publish">
              <button className="send-offer"><svg className="svg-more" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM12 8v8m-4-4h8" /></svg>
                <span className="announce" onClick={onClick}>Déposer une annonce</span></button>
            </Link>
            <div className="search">
              <span className="svg-search"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
              <span className="search-text">Rechercher</span>
            </div>
          </div>
          <div className="wrapper-user">
            <div className="user" onClick={onConnectionClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <div>{props.connected === false ? <span>Se connecter</span> : <span>Connecté</span>}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;