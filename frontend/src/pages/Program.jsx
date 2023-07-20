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
      {programActivities.map((activity) => (
        <div key={activity.program_id}>
          <p> {activity.activity_name}</p>
          <p>Adresse : {activity.activity_address}</p>
          <p>Horaires : {activity.activity_openingHours}</p>
          <p>Prix : {activity.activity_price}€</p>
        </div>
      ))}
    </div>
  );
}
