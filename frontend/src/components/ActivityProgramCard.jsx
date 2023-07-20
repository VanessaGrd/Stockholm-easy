import PropTypes from "prop-types";

import "react-toastify/dist/ReactToastify.css";
import styles from "./ActivityCard.module.scss";

export default function ActivityProgramCard({ activity }) {
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
    </div>
  );
}
ActivityProgramCard.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    openingHours: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
