import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ActivityCard.module.scss";
import EditActivity from "./EditActivity";
import DeleteActivity from "./DeleteActivity";

export default function ActivityCardModify({ activity }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

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
      <div className={styles.buttonContainer}>
        <button
          className={styles.modifyButton}
          type="submit"
          onClick={() => setOpenModal(true)}
        >
          Modifier
        </button>
        <button
          className={styles.deleteButton}
          type="submit"
          onClick={() => setOpenDeleteModal(true)}
        >
          Supprimer
        </button>
        {openModal && (
          <EditActivity
            setOpenModal={setOpenModal}
            className={styles.modalcontainer}
            selectedActivity={activity.id}
          />
        )}

        {openDeleteModal && (
          <DeleteActivity
            setOpenDeleteModal={setOpenDeleteModal}
            className={styles.modalcontainer}
            selectedActivity={activity.id}
          />
        )}
      </div>
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
