import React, { useState } from "react";
import Search from "../components/Search";
import Offers from "../components/Offers";
import Navigation from "../components/Navigation";

const Home = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState();
  const [offers, setOffers] = useState([]);
  const [limit, setLimit] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="home">
      <Search setOffers={setOffers} setCount={setCount} setLimit={setLimit} setIsLoading={setIsLoading} />
      <Offers offers={offers} currentOfferFunc={props.currentOfferFunc} setIsLoading={setIsLoading} isLoading={isLoading}
        offersFunc={setOffers} currentPage={currentPage} limit={limit} countFunc={setCount} />
      <Navigation count={count} limit={limit}
        currentPage={currentPage} currentPageFunc={setCurrentPage} />
    </div>
  );
};

export default Home;