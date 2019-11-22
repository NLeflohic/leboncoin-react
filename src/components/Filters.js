import React, { useState } from "react";


const Filters = (props) => {
  let LocalFilters = { ...props.filters };

  const [priceMin, setPriceMin] = useState(LocalFilters.priceMin);
  const [priceMax, setPriceMax] = useState(LocalFilters.priceMax);
  const [sort, setSort] = useState(LocalFilters.sort);
  const [buttonLabel, setButtonLabel] = useState("Tri")
  const [menuDisplay, setMenuDisplay] = useState(false);
  const [limit, setLimit] = useState(3);

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onBtnClick = () => {
    setMenuDisplay(!menuDisplay);
  }

  const controlValue = (val) => {
    if (val !== "") {
      val = val + "&"
    }
    return val;
  }

  const getUrl = () => {
    let res = "";
    if (priceMin > 0) {
      res = "priceMin=" + priceMin;
    };
    if (priceMax > 0) {
      res = controlValue(res);
      res = res + "priceMax=" + priceMax
    }
    switch (sort) {
      case 1: {
        res = controlValue(res);
        res = res + "sort=price-asc"
        break;
      }
      case 2: {
        res = controlValue(res);
        res = res + "sort=price-desc"
        break;
      }
      case 3: {
        res = controlValue(res);
        res = res + "sort=date-asc"
        break;
      }
      case 4: {
        res = controlValue(res);
        res = res + "sort=date-desc";
        break;
      }
      default:
        break;
    };

    if (limit > 0) {
      res = controlValue(res);
      res = res + "limit=" + limit;
    } else {
      res = controlValue(res);
      res = res + "limit=" + 3;
      LocalFilters.limit = 3;
    }
    return res;
  }

  const onValidateClick = () => {
    LocalFilters.url = getUrl();
    LocalFilters.priceMin = priceMin;
    LocalFilters.priceMax = priceMax;
    if (limit > 0) {
      LocalFilters.limit = limit;
    } else {
      LocalFilters.limit = 3;
    }
    props.setFilters(LocalFilters);
  }

  return (
    <div className="filters">
      <form onSubmit={onSubmit}>
        <div className="options">
          <div className="filter-price">
            <div className="price-filter">
              <p>Prix minimum</p>
              <input value={priceMin} onChange={(e) => {
                setPriceMin(e.target.value);
              }} />
            </div>
            <div className="price-filter">
              <p>Prix maximum</p>
              <input value={priceMax} onChange={(e) => {
                setPriceMax(e.target.value);
              }} />
            </div>
          </div>
          <div className="limit">
            <p>Nombre de résultats par page</p>
            <input value={limit} onChange={(e) => {
              setLimit(e.target.value);
            }} />
          </div>
          <div className="sort-filter">
            <button className="dropbtn" onClick={onBtnClick}>{buttonLabel}</button>
            {menuDisplay === true &&
              <div className="dropdown-content">
                {/* <a onClick={
                  () => {
                    setSort(1);
                    setButtonLabel("prix croissant");
                    setMenuDisplay(false);
                  }
                } href="#">Prix croissant</a> */}
                <span onClick={
                  () => {
                    setSort(1);
                    setButtonLabel("prix croissant");
                    setMenuDisplay(false);
                  }
                }>Prix croissant</span>
                <span onClick={
                  () => {
                    setSort(2);
                    setButtonLabel("prix décroissant");
                    setMenuDisplay(false);
                  }
                }>Prix décroissant</span>
                <span onClick={
                  () => {
                    setSort(3);
                    setButtonLabel("Date croissante");
                    setMenuDisplay(false);
                  }
                }>Date croissante</span>
                <span onClick={
                  () => {
                    setSort(4);
                    setButtonLabel("Date décroissante");
                    setMenuDisplay(false);
                  }
                }>Date décroissante</span>
              </div>
            }
            <button className="validate" onClick={onValidateClick}>Valider</button>
          </div>
        </div>
      </form>
    </div>

  )
};

export default Filters;