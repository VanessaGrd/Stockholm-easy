import { React } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AdminDashbord.module.scss";
import logo from "../assets/logo.png";

export default function AdminDashbord() {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/admin-add");
  };
  const handleModifyClick = () => {
    navigate("/admin-modify");
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
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
