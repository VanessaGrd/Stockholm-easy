import { React } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Choice.module.scss";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import map from "../assets/map.svg";

export default function Choice() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleClick = () => {
    navigate("/activities");
  };
  const handleClickProgram = () => {
    navigate(`/program/${user.id}`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={map} alt="logo" />
      </div>

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
