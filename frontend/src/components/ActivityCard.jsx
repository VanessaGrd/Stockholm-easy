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

  const handleAddActivity = async (event) => {
    event.preventDefault();
    if (!userContext.user.id) {
      toast.error("ID de l'utilisateur manquant !");
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

    if (!activityData.activity_id) {
      toast.error(
        "Les informations d'utilisateur ou de session sont manquantes !"
      );
    } else {
      try {
        setIsButtonDisabled(true);
        await APIService.post(`/program`, activityData);
        toast.success("Votre activité a bien été enregistrée ! 👍", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error(
          "Une erreur s'est produite lors de l'enregistrement des vins de la recette !"
        );
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.activityButtonContainer}>
      <div className={styles.activity_card_container}>
        <div className={styles.leftContainer}>
          <h2>{activity.name}</h2>
          <p>Adresse : {activity.address}</p>
          <p>Horaires : {activity.openingHours}</p>
          <p>Prix : {activity.price}€</p>
        </div>
        <div className={styles.rightContainer}>
          <img src={activity.picture} alt={activity.name} />
        </div>{" "}
      </div>{" "}
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
