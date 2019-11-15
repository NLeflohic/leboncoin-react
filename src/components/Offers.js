import React from "react";
import { Link } from "react-router-dom";

const moment = require('moment');


const Offers = (props) => {

  return (
    <div className="wrapper-offers">
      <div className="items-list">
        {
          props.offers.map((offer) => {
            return (
              <Link to="/offer" key={offer._id} prop={offer._id} onClick={() => {
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