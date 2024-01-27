import { React } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.scss";
import RegisterForm from "../components/RegisterForm";
import Title from "../components/Title";
import stockholm from "../assets/stockholm.jpeg";

export default function Register() {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <div className={styles.page}>
      <div className={styles.pictureBlock}>
        <img src={stockholm} alt="Stockholm" />
        <div className={styles.registerBlock}>
          <Title subTitle="Välkomna 🇸🇪!👋" />
          <div className={styles.presentationBlock}>
            <div className={styles.presentation}>
              <h3>
                Découvrez Stockholm à votre rythme !
                <br />
                <br />
                <p className={styles.subtitle}>
                  Ajoutez vos activités préférées à votre programme personnalisé
                  et vivez une expérience inoubliable dans la magnifique
                  capitale suédoise.
                </p>
              </h3>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
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
