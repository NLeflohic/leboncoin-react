import React from "react";

const Search = () => {
  return (
    <div className="wrapper-search">
      <div className="elipse">
      </div >
      <div className="panel-search">
        <form className="form">
          <input className="search-input" type="text" placeholder="Que recherchez vous ?" />
          <input className="search-button" type="submit" value="Rechercher" />
        </form>
      </div >
    </div>
  )
}

export default Search;