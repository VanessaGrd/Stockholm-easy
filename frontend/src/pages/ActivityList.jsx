import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MenuBurger from "../components/MenuBurger";
import { useUserContext } from "../contexts/UserContext";

import ActivityCard from "../components/ActivityCard";
import "react-toastify/dist/ReactToastify.css";

import styles from "./ActivityList.module.scss";
import logo from "../assets/logo.png";
import logoutButton from "../assets/logout.svg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ActivityList() {
  const [listActivities, setListActivities] = useState([]);
  const navigate = useNavigate();
  const { logout } = useUserContext();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/activity`)
      .then((response) => setListActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  // Fonction de déconnexion
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
      <div className={styles.activity_list_container}>
        {listActivities.map((activity) => (
          <div className={styles.modalesContainer}>
            <ActivityCard key={activity.id} activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
}
