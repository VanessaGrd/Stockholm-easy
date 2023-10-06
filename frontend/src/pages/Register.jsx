import { React } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import logo2 from "../assets/logo2.svg";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.page}>
      <div>
        <div className={styles.logo}>
          <img src={logo2} alt="logo" />
        </div>

        <div className={styles.presentation}>
          <h2>Välkomna 🇸🇪!👋</h2>
          <br />
          <h3>
            Découvrez Stockholm à votre rythme avec notre application exclusive
            !
            <br />
            <br />
            <p className={styles.subtitle}>
              Ajoutez vos activités préférées à votre programme personnalisé et
              vivez une expérience inoubliable dans la magnifique capitale
              suédoise.
            </p>
          </h3>
        </div>
      </div>
      <RegisterForm />
      <button
        className={styles.navigateButton}
        type="button"
        onClick={handleToLogin}
      >
        Déjà inscrit ?
      </button>
    </div>
  );
}
