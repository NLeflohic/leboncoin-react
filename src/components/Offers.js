import React from "react";

const Offers = (props) => {

  return (
    <div className="wrapper-offers">
      <div className="items-list">
        {
          props.offers.map((offer) => {
            return (
              <div key={offer.id} className="item" >
                <div className="image-panel">
                  <img className="image-item" src={offer.pictures[0]} />
                </div>
                <div className="detail">
                  <div className="summary">
                    <p className="title">{offer.title}</p>
                    <p className="price">{offer.price}€</p>
                  </div>
                </div>
              </div>
            );
          }
          )}
      </div>
    </div >)
};

export default Offers;