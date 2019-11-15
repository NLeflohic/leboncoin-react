import React from "react";
import Search from "../components/Search";
import Offers from "../components/Offers";
import Navigation from "../components/Navigation";

const Home = (props) => {
  return (
    <div className="home">
      <Search />
      <Offers offers={props.offers} currentOfferFunc={props.currentOfferFunc} />
      <Navigation count={props.count} limit={props.limit}
        currentPage={props.currentPage} currentPageFunc={props.currentPageFunc} />
    </div>
  );
};

export default Home;