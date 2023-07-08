import { React } from "react";
import styles from "./Register.module.scss";
import logo from "../assets/logo.png";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.presentation}>
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
