import React from "react";
import Header from "../components/Header";
import Offers from "../components/Offers";

const Home = (props) => {
  return (
    <div className="home">
      <Header />
      <Offers offers={props.offers} />
    </div>
  );
};

export default Home;