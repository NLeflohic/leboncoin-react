import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (event) => {
    const cookie = Cookies.get("token");
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: email,
        password: password
      })
      .then(response => {
        if (response.data && response.data.token) {
          if (response.data.token === cookie) {
            props.setConnected(true);
          }
          props.setShowLogin(false);
        }
      })
      .catch(err => {
        console.log(err);
        props.setShowLogin(false);
      });
    event.preventDefault();
  };


  const onSignupClick = () => {
    props.setShowLogin(false);
  }

  return (
    <section className="login">
      <div className="connexion">
        <div className="inputs">
          <form onSubmit={onSubmit}>
            <h1>Connexion</h1>
            <h2>Adresse email</h2>
            <input type="text" placeholder="Adresse mail" onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <h2>Mot de passe</h2>
            <input type="password" placeholder="Password" onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <button>Se connecter</button>
          </form>
          <p className="separator"></p>
          <div className="signup">
            <h1>Vous n'avez pas de compte ?</h1>
            <Link to={"/signin"}><button onClick={onSignupClick}>Créer un compte</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;

// {
//   "_id": "5dd2c5ffe758340015c06112",
//   "token": "ILIVgR86CAEzc10pTByc4jnrbnUozWbPpOCGAj4aEvQvKxekZC0O8t6JNLb9La84",
//   "account": {
//       "username": "Nico3"
//   }
// }


// {
// 	"email":"nico3@nico.fr",
// 	"username":"Nico3",
// 	"password":"Nico3"
// }