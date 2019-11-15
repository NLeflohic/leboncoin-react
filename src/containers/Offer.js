import React from "react";
import Header from "../components/Header";

const moment = require("moment");

const Offer = (props) => {
  console.log(props);
  return (<div className="offer">
    <Header />
    <div className="item-detail">
      <div className="item">
        <div className="image-panel">
          <img className="image-item" src={props.currentOffer.pictures[0]} alt={props.currentOffer.pictures[0]} />
        </div>
        <div className="detail">
          <div className="summary">
            <p className="title">{props.currentOffer.title}</p>
            <p className="price">{props.currentOffer.price}€</p>
            <p className="date">{moment(props.currentOffer.created).format('DD/MM/YYYY à hh:mm')}</p>
          </div>
        </div>
      </div>

    </div>
  </div>)
};

export default Offer;