import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import ActivityProgramCard from "../components/ActivityProgramCard";
import MenuBurger from "../components/MenuBurger";
import { useUserContext } from "../contexts/UserContext";
import styles from "./Program.module.scss";
import logoutButton from "../assets/logout.svg";
import logo from "../assets/logo.png";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function Program() {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const { id } = useParams();
  const [programActivities, setProgramActivities] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    // Récupérer les activités ajoutées par l'utilisateur en utilisant l'ID de l'utilisateur
    const fetchProgramActivities = async () => {
      try {
        const response = await axios.get(`${apiBaseUrl}/program-user/${id}`);
        /* eslint-disable */
        console.log(response.data);
        setProgramActivities(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    /* eslint-disable */
    fetchProgramActivities();
  }, [user.id]);
  console.log(user.id);

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
      <div className={styles.programContainer}>
        <h1>Activités ajoutées</h1>
        <div className={styles.activity_list_container}>
          {programActivities.map((activity) => (
            <ActivityProgramCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
}
