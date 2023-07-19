import { React } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import logoutButton from "../assets/logout.svg";
import styles from "./AdminDashbord.module.scss";
import logo from "../assets/logo.png";

export default function AdminDashbord() {
  const navigate = useNavigate();

  const { logout } = useUserContext();

  // Fonction de déconnexion
  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };
  const handleAddClick = () => {
    navigate("/activity-add");
  };
  const handleModifyClick = () => {
    navigate("/activity-modify");
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
      <div className={styles.activityModal}>
        <div>Activités</div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttonAdd}
            type="submit"
            onClick={handleAddClick}
          >
            Ajouter
          </button>
          <button
            className={styles.buttonModify}
            type="submit"
            onClick={handleModifyClick}
          >
            Modifier
          </button>
        </div>
      </div>
    </div>
  );
}
