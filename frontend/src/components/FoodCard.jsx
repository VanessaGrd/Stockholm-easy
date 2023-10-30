import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import "react-toastify/dist/ReactToastify.css";
import APIService from "../services/APIService";
import styles from "./ActivityCard.module.scss";
import restaurant from "../assets/restaurant.png";

export default function FoodCard({ food }) {
  const userContext = useUserContext();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // ajout de l'activité à la liste de l'utilisateur
  const handleFood = async (event) => {
    event.preventDefault();
    // vérification si l'id de l'utilisateur est présent dans le contexte utilisateur
    if (!userContext.user.id) {
      toast.error(
        "Une information de l'utilisateur est manquante empêchant l'ajout du restaurant dans le programme !"
      );
      return;
    }
    const foodData = {
      user_id: userContext.user.id,
      food_id: food.id,

      food_name: food.name,

      food_address: food.address,

      food_price: food.price,

      food_website: food.website,
    };
    // Vérification si l'id de l'activité est dans "activityData"
    if (!foodData.food_id) {
      toast.error(
        "Les informations d'utilisateur ou de session sont manquantes !"
      );
    } else {
      try {
        // Désactiver le bouton d'ajout après click
        setIsButtonDisabled(true);
        // Ajout de l'activité au programme de l'utilisateur
        await APIService.post(`/program`, foodData);
        toast.success("Votre restaurant a bien été enregistré ! 👍", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error(
          "Une erreur s'est produite lors de l'enregistrement du restaurant dans le programme !"
        );
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.activityButtonContainer}>
      <div className={styles.logoContainer}>
        <img src={restaurant} alt="restaurantLogo" />
      </div>{" "}
      <div className={styles.leftContainer}>
        <h2>{food.name}</h2>
        <p>
          <strong>Adresse :</strong> {food.address}
        </p>

        <p>
          {" "}
          <strong>Prix : </strong>
          {food.price}€
        </p>
      </div>
      <p>
        {" "}
        <strong>Site web : </strong>
        {food.website}
      </p>
      <button
        onClick={handleFood}
        className={styles.modifyButton}
        type="submit"
        disabled={isButtonDisabled}
      >
        Ajouter
      </button>
    </div>
  );
}

FoodCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};
