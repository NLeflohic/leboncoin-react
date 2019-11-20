import React, { useState } from "react";

const Announce = (props) => {
  const [title, setTitle] = useState("");
  const [textAnnounce, setTextAnnounce] = useState("");
  const [price, setPrice] = useState(0);
  const [picutres, setPictures] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    alert(props.token);
  }

  return (
    <div className="announce-page">
      <div className="wrapper-announce">
        <div className="announce-info">
          <form onSubmit={onSubmit}>
            <h1>Déposer une annonce</h1>
            <h2>Titre de l'annonce</h2>
            <input type="text" value={title} onChange={(event) =>
              setTitle(event.target.value)} />
            <label>
              <h2>Texte de l'annonce</h2>
              <textarea value={textAnnounce} onChange={(event) => {
                setTextAnnounce(event.target.value)
              }} />
            </label>
            <h2>Price</h2>
            <input className="number" type="text" pattern="[0-9]*" value={price} onInput={(event) => {
              console.log(event.target.validity.valid);
              { event.target.validity.valid && setPrice(event.target.value) }
            }} />€
            <h2>Photos</h2>
            <input type="file" onChange={(event) => {
              setPictures(event.target.data);
            }} />
            <div>
              <button>Valider</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;