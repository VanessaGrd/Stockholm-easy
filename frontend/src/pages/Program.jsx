import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import MenuBurger from "../components/MenuBurger";

// import { useProgramContext } from "../contexts/ProgramContext";
// import { useUserContext } from "../contexts/UserContext";
// import styles from "./Program.module.scss";
// import logoutButton from "../assets/logout.svg";
// import logo from "../assets/logo.png";
const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function Program() {
  //  const navigate = useNavigate();
  // const { logout } = useUserContext();
  const [programActivities, setProgramActivities] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/program-user/${id}`)
      .then((response) => setProgramActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!programActivities) return null;

  // const handleLogout = () => {
  // logout();
  // toast.success("Déconnexion réussie !");
  // navigate("/login");
  // };

  return (
    <div>
      <h1>Activités du programme de l'utilisateur</h1>
      {programActivities.map((activity) => (
        <div key={activity.program_id}>
          {/* Afficher les détails de l'activité ici */}
          <p>Nom de l'activité : {activity.activity_name}</p>
          <p>Adresse de l'activité : {activity.activity_address}</p>
          {/* ... Autres détails de l'activité ... */}
        </div>
      ))}
    </div>
  );
}
