import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  useParams
} from "react-router-dom";

const moment = require("moment");

const Offer = () => {
  const [offerDetail, setOfferDetail] = useState({});
  const [picture, setPicture] = useState("");

  const fetchData = async (url) => {
    const response = await axios.get(url);
    setOfferDetail(response.data);
    setPicture(response.data.pictures[0])
  }

  console.log("render");
  const { id } = useParams();
  useEffect(() => {
    const url = "https://leboncoin-api.herokuapp.com/api/offer/" + id;
    fetchData(url);
  }, []);

  console.log(offerDetail);
  return (
    <div className="wrapper-offer">
      <div className="wrapper-offer-detail">
        <div className="item-detail">
          <div className="item">
            <div className="image-panel">
              <img className="image-item" src={picture} alt="pictures" />
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
          <h1 className="vendor-title">Vendu par alex</h1>
          <div className="buy-me">
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Offer;