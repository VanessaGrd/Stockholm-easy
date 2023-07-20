import { React } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Choice.module.scss";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import logoutButton from "../assets/logout.svg";
import logo from "../assets/logo.png";

export default function Choice() {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const { user } = useUserContext();

  const handleClick = () => {
    navigate("/activities");
  };
  const handleClickProgram = () => {
    navigate(`/program/${user.id}`);
  };
  // Fonction de déconnexion
  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <button
        className={styles.logoutButton}
        type="button"
        onClick={handleLogout}
      >
        {" "}
        <img src={logoutButton} alt="logout-button" />
      </button>
      <div className={styles.modalesContainer}>
        <div className={styles.activityModal}>
          <button type="button" onClick={handleClick}>
            Activités
          </button>
        </div>
        <div className={styles.eatModal}>
          <button type="button" onClick={handleClick}>
            Où manger ?
          </button>
        </div>
        <div className={styles.sleepModal}>
          <button type="button" onClick={handleClick}>
            Où dormir ?
          </button>
        </div>
        <div className={styles.programModal}>
          <button type="button" onClick={handleClickProgram}>
            Mon programme
          </button>
        </div>
      </div>
    </div>
  );
}
