import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { useUserContext } from "../contexts/UserContext";
import styles from "./Program.module.scss";
import logoutButton from "../assets/logout.svg";
import logo from "../assets/logo.png";
import ActivityCard from "../components/ActivityCard";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Program() {
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [program, setProgram] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/program`)
      .then((response) => setProgram(response.data))
      .catch((err) => console.error(err));
  }, []);
  // Fonction de déconnexion
  console.info(program);

  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
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
        {program.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
