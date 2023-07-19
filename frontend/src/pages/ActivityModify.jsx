import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import styles from "./ActivityList.module.scss";
import logoutButton from "../assets/logout.svg";
import logo from "../assets/logo.png";
import ActivityCardModify from "../components/ActivityCardModify";
import NavbarAdmin from "../components/NavbarAdmin";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function ActivityModify() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const navigate = useNavigate();
  const { logout } = useUserContext();

  // Fonction de déconnexion
  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/activity`)
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <NavbarAdmin />
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
        {activities.map((activity) => (
          <ActivityCardModify
            key={activity.id}
            activity={activity}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            setActivities={setActivities}
          />
        ))}
      </div>
    </div>
  );
}
