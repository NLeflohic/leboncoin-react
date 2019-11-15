import React from "react";
import Header from "../components/Header";
import Offers from "../components/Offers";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = (props) => {
  return (
    <div className="home">
      <Header />
      <Offers offers={props.offers} currentOfferFunc={props.currentOfferFunc} />
      <Navigation count={props.count} limit={props.limit}
        currentPage={props.currentPage} currentPageFunc={props.currentPageFunc} />
      <Footer />
    </div>
  );
};

export default Home;