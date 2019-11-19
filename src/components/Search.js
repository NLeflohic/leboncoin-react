import React, { useState } from "react";
import axios from "axios";
import Filters from "./Filters";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const [isFiltersDisplayed, setIsFiltersDisplayed] = useState(false);
  const [filters, setFilters] = useState({ priceMin: 0, priceMax: 0, sort: 0, limit: 3, url: "" });
  let addUrl = "";

  const onChange = (event) => {
    setSearchText(event.target.value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(filters);
    if (searchText !== "") {
      addUrl = "title=" + searchText;
    }
    if (filters.url !== "") {
      addUrl = addUrl + "&" + filters.url;
    }
    const url = "https://leboncoin-api.herokuapp.com/api/offer/with-count?" + addUrl;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data);
    props.setOffers(response.data.offers);
    props.setCount(response.data.count);
    props.setLimit(filters.limit);
  }

  const onFiltersClick = () => {
    setIsFiltersDisplayed(!isFiltersDisplayed);
    if (!isFiltersDisplayed) {
      setFilters({ priceMin: 0, priceMax: 0, sort: 0, url: "" });
    }
  }

  return (
    <div className="wrapper-search">
      <div className="elipse"></div>
      <div className="panel-search">
        <form className="form" onSubmit={onSubmit}>
          <input className="search-input" type="text" placeholder="Que recherchez vous ?" onChange={onChange} />
          <input className="search-button" type="submit" value="Rechercher" />
        </form>
        <div className="filtres">
          <button onClick={onFiltersClick}>Filtres</button>
        </div>
      </div >
      {isFiltersDisplayed === true && <Filters filters={filters} setFilters={setFilters} setIsFilterDisplayed={setIsFiltersDisplayed} />}
    </div>
  )
}

export default Search;