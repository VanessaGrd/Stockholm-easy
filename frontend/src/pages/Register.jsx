import { React } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import logo from "../assets/logo.png";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <button
        className={styles.navigateButton}
        type="button"
        onClick={handleToLogin}
      >
        Déjà <br />
        inscrit ?
      </button>
      <div className={styles.presentation}>
        <h2>Hej ! Välkomna 🇸🇪! 👋</h2>
        <br />
        <h3>
          Découvrez Stockholm à votre rythme avec notre application exclusive !
          <br />
          <br />
          Ajoutez vos activités préférées à votre programme personnalisé et
          vivez une expérience inoubliable dans la magnifique capitale suédoise.
        </h3>
      </div>
      <RegisterForm />
    </>
  );
}
