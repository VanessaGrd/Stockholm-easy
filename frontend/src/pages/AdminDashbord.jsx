import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AdminDashbord.module.scss";
import logo from "../assets/logo2.svg";
import AddActivity from "../components/AddActivity";

export default function AdminDashbord() {
  const navigate = useNavigate();
  const [openAddModal, setOpenAddModal] = useState(false);

  const handleModifyClick = () => {
    navigate("/activity-modify");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.modalesContainer}>
        <div className={styles.activityModal}>
          <div>Activités</div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonAdd}
              type="submit"
              onClick={() => setOpenAddModal(true)}
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
        {openAddModal && (
          <AddActivity
            setOpenAddModal={setOpenAddModal}
            className={styles.modaleContainer}
          />
        )}

        <div className={styles.eatModal}>
          <div>Où manger ?</div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonAdd}
              type="submit"
              onClick={() => setOpenAddModal(true)}
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
        <div className={styles.sleepModal}>
          <div>Où dormir ?</div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.buttonAdd}
              type="submit"
              onClick={() => setOpenAddModal(true)}
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
    </div>
  );
}
