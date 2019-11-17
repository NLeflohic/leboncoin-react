import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const moment = require('moment');


const Offers = (props) => {
  const fetchData = async (url) => {
    const response = await axios.get(url);
    props.countFunc(response.data.count);
    props.offersFunc(response.data.offers);
  }

  const pageToFetch = props.currentPage * props.limit;
  const url = "https://leboncoin-api.herokuapp.com/api/offer/with-count?skip=" + pageToFetch + "&limit=" + props.limit;
  useEffect(() => {

    fetchData(url);
  }, [props.currentPage]);

  return (
    <div className="wrapper-offers">
      <div className="items-list">
        {
          props.offers.map((offer) => {
            const id = offer._id;
            return (
              <Link to={"/offer/" + id} key={offer._id} prop={offer._id} onClick={() => {
                props.currentOfferFunc(offer);
              }}>
                <>
                  <div className="item">
                    <div className="image-panel">
                      <img className="image-item" src={offer.pictures[0]} alt={offer.pictures[0]} />
                    </div>
                    <div className="detail">
                      <div className="summary">
                        <p className="title">{offer.title}</p>
                        <p className="price">{offer.price}€</p>
                        <p className="date">{moment(offer.created).format('DD/MM/YYYY à hh:mm')}</p>
                      </div>
                    </div>
                  </div>
                </>
              </Link>
            );
          }
          )}
      </div>
    </div >
  )
};

export default Offers;