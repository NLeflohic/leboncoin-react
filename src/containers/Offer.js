import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams
} from "react-router-dom";

const moment = require("moment");

const Offer = () => {
  const [offerDetail, setOfferDetail] = useState({});

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetchdata");
      const url = "https://backend-leboncoin.herokuapp.com/offer/" + id;
      const response = await axios.get(url);
      const data = response.data;
      setOfferDetail({ ...data });
    }
    fetchData();
  });

  if (offerDetail.title !== undefined) {
    return (
      <div className="wrapper-offer">
        <div className="wrapper-offer-detail">
          <div className="item-detail">
            <div className="item">
              <div className="image-panel">
                <img className="image-item" src={offerDetail.pictures[0]} alt="pictures" />
              </div>
              <div className="detail">
                <div className="summary">
                  <p className="title">{offerDetail.title}</p>
                  <p className="price">{offerDetail.price}€</p>
                  <p className="date">{moment(offerDetail.created).format('DD/MM/YYYY à hh:mm')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h1>Description</h1>
            <span>{offerDetail.description}</span>
          </div>
        </div>
        <div className="vendor">
          <div className="vendor-detail">
            <h1 className="vendor-title">{offerDetail.creator.account.username}</h1>
            <div className="buy-me">
              <button>Acheter</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }

};

export default Offer;