import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = (props) => {
  const [inputMail, setInputMail] = useState("");
  const [inputPseudo, setInputPseudo] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [cgvOk, setCgvOk] = useState("false");
  const [signupError, setSignupError] = useState([]);
  const history = useHistory();
  const msgErreur = [];

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputPassword !== inputConfirmPassword) {
      msgErreur.push("Les mots de passe ne correspondent pas");
    };
    if (!cgvOk) {
      msgErreur.push("Les CGV n'ont pas été acceptés");
    } else
      if ((inputMail !== "") && (inputPseudo !== "") && (inputPassword !== "") && (cgvOk === true)) {

        axios.post("https://backend-leboncoin.herokuapp.com/user/sign_up", {
          email: inputMail,
          username: inputPseudo,
          password: inputPassword
        }).then((response) => {
          props.setToken(response.data.token);
          Cookies.set("token", response.data.token);
          props.setToken(response.data.token);
          props.setConnected(true);
          history.push("/");
        })
          .catch((error) => {
            alert(error.message);
          })
          ;
      }
    if (msgErreur.length > 0) {
      setSignupError(msgErreur);
    }
  }

  return (
    <section className="page">
      <div className="signin-form">
        <div className="why">
          <h1>Pourquoi créer un compte ?</h1>
          <div className="answer">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4183D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <div>
              <h1>Gagnez du temps</h1>
              <p>Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce. </p>
            </div>
          </div>
          <div className="answer">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4183D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg>
            <div>
              <h1>Soyez les premiers informés</h1>
              <p>Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui vous intéresse. </p>
            </div>
          </div>
          <div className="answer">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4183D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <div>
              <h1>Visibilité</h1>
              <p>Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contacts reçus). </p>
            </div>
          </div>
        </div>
        <div className="account-creation">
          <h1>Creér un compte</h1>
          <form onSubmit={onSubmit}>
            <h2>Pseudo *</h2>
            <input type="text" placeholder="Pseudo" value={inputPseudo} onChange={(event) => {
              setInputPseudo(event.target.value);
            }} />
            <h2>Adresse email</h2>
            <input type="email" placeholder="email" value={inputMail} onChange={(event) => {
              setInputMail(event.target.value);
            }} />
            <div className="password">
              <div className="passsword-input">
                <h2>Mot de passe</h2>
                <input className="inpt" type="password" value={inputPassword} onChange={(event) => {
                  setInputPassword(event.target.value);
                }} />
              </div>
              <div className="confirmation-input">
                <h2>Confirmer le mot de passe</h2>
                <input className="inpt" type="password" value={inputConfirmPassword} onChange={(event) => {
                  setInputConfirmPassword(event.target.value);
                }} />
              </div>
            </div>
            <div className="checkbox">
              <input className="box-checkbox" type="checkbox" value={cgvOk} onChange={(event) => {
                setCgvOk(event.target.checked);
              }
              } />
              <p>J'accepte les conditions de Vente et les conditions générales d'utilisation</p>
            </div>
            <button className="create-button">Créer mon compte personnel</button>
            <div className="signup-error">
              {signupError.map((error, idx) => {
                return <p key={idx}>{error}</p>
              })
              }
            </div>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Signup;