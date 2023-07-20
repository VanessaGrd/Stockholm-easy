import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
import { useState, useEffect } from "react";

// import MenuBurger from "../components/MenuBurger";

// import { useProgramContext } from "../contexts/ProgramContext";
import { useUserContext } from "../contexts/UserContext";
// import styles from "./Program.module.scss";
// import logoutButton from "../assets/logout.svg";
// import logo from "../assets/logo.png";
import APIService from "../services/APIService";

export default function Program() {
  //  const navigate = useNavigate();
  // const { logout } = useUserContext();
  const userContext = useUserContext();
  const [programActivities, setProgramActivities] = useState([]);

  useEffect(() => {
    // Récupérer les activités du programme de l'utilisateur en utilisant l'ID de l'utilisateur
    const fetchProgramActivities = async () => {
      try {
        const response = await APIService.get(
          `/program-user/${userContext.user.id}`
        );
        setProgramActivities(response.data);
      } catch (error) {
        console.error(error);
        // Gérer les erreurs de récupération des activités du programme ici
      }
    };
    fetchProgramActivities();
  }, [userContext.user.id]);

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
