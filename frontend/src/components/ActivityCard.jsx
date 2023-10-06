import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import APIService from "../services/APIService";
import styles from "./ActivityCard.module.scss";

export default function ActivityCard({ activity }) {
  const userContext = useUserContext();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // ajout de l'activité à la liste de l'utilisateur
  const handleAddActivity = async (event) => {
    event.preventDefault();
    // vérification si l'id de l'utilisateur est présent dans le contexte utilisateur
    if (!userContext.user.id) {
      toast.error(
        "Une information de l'utilisateur est manquante empêchant l'ajout de l'activité dans le programme !"
      );
      return;
    }
    const activityData = {
      user_id: userContext.user.id,
      activity_id: activity.id,

      activity_name: activity.name,

      activity_address: activity.address,

      activity_openingHours: activity.openingHours,

      activity_price: activity.price,
    };
    // Vérification si l'id de l'activité est dans "activityData"
    if (!activityData.activity_id) {
      toast.error(
        "Les informations d'utilisateur ou de session sont manquantes !"
      );
    } else {
      try {
        // Désactiver le bouton d'ajout après click
        setIsButtonDisabled(true);
        // Ajout de l'activité au programme de l'utilisateur
        await APIService.post(`/program`, activityData);
        toast.success("Votre activité a bien été enregistrée ! 👍", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error(
          "Une erreur s'est produite lors de l'enregistrement de l'activité dans le programme !"
        );
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.activityButtonContainer}>
      <div className={styles.rightContainer}>
        <img src={activity.picture} alt={activity.name} />
      </div>{" "}
      <div className={styles.leftContainer}>
        <h2>{activity.name}</h2>
        <p>
          <strong>Adresse :</strong> {activity.address}
        </p>
        <p>
          {" "}
          <strong>Horaires : </strong>
          {activity.openingHours}
        </p>
        <p>
          {" "}
          <strong>Prix : </strong>
          {activity.price}€
        </p>
      </div>
      <button
        onClick={handleAddActivity}
        className={styles.modifyButton}
        type="submit"
        disabled={isButtonDisabled}
      >
        Ajouter
      </button>
    </div>
  );
}

ActivityCard.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    openingHours: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
