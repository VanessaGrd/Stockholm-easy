import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MenuBurger from "../components/MenuBurger";

import { useUserContext } from "../contexts/UserContext";
import styles from "./Program.module.scss";
import logoutButton from "../assets/logout.svg";
import logo from "../assets/logo.png";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function Program() {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [programActivities, setProgramActivities] = useState();
  const { id } = useParams();
  // récupère les informations du program en fonction du user_id
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/program-user/${id}`)
      .then((response) => setProgramActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!programActivities) return null;

  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };

  return (
    <div className={styles.pageContainer}>
      <MenuBurger />
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
      <h2>Mon programme</h2>
      <div className={styles.activity_list_container}>
        {programActivities.map((activity) => (
          <div className={styles.activity_card_container}>
            <div key={activity.program_id} className={styles.leftContainer}>
              <h2> {activity.activity_name}</h2>
              <p>Adresse : {activity.activity_address}</p>
              <p>Horaires : {activity.activity_openingHours}</p>
              <p>Prix : {activity.activity_price}€</p>
            </div>

            <div className={styles.rightContainer}>
              <img
                src={activity.activity_picture}
                alt={activity.activity_name}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
