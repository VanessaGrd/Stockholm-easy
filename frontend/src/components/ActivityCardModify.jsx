import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ActivityCard.module.scss";
import EditActivity from "./EditActivity";

export default function ActivityCardModify({ activity }) {
  const [openModal, setOpenModal] = useState(false);
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
      <button type="submit" onClick={() => setOpenModal(true)}>
        Modifier
      </button>
      {openModal && (
        <EditActivity
          setOpenModal={setOpenModal}
          className={styles.modalcontainer}
          selectedActivity={activity.id}
        />
      )}
    </div>
  );
}

ActivityCardModify.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    openingHours: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
