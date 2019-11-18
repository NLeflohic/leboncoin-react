import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onSigninClick = () => {
    props.setShowLogin(false);
  }

  return (
    <section className="login">
      <div className="connexion">
        <div className="inputs">
          <form>
            <h1>Connexion</h1>
            <h2>Adresse email</h2>
            <input type="text" placeholder="Adresse mail" />
            <h2>Mot de passe</h2>
            <input type="password" placeholder="Password" />
            <button>Se connecter</button>
          </form>
          <p className="separator"></p>
          <div className="signup">
            <h1>Vous n'avez pas de compte ?</h1>
            <Link to={"/signin"}><button onClick={onSigninClick}>Créer un compte</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login;