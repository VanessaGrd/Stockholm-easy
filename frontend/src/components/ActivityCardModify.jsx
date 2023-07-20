import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./ActivityCard.module.scss";
import EditActivity from "./EditActivity";
import DeleteActivity from "./DeleteActivity";

export default function ActivityCardModify({
  activity,
  updateActivitiesAfterDelete,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(activity); // Nouvel état pour stocker l'activité actuellement affichée

  return (
    <div className={styles.activityButtonContainer}>
      <div className={styles.activity_card_container}>
        <div className={styles.leftContainer}>
          <h2>{currentActivity.name}</h2>
          <p>Adresse : {currentActivity.address}</p>
          <p>Horaires : {currentActivity.openingHours}</p>
          <p>Prix : {currentActivity.price}€</p>
        </div>
        <div className={styles.rightContainer}>
          <img src={currentActivity.picture} alt={currentActivity.name} />
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
            setOpenModal={(isOpen, updatedActivity) => {
              setOpenModal(isOpen);
              if (updatedActivity) {
                setCurrentActivity(updatedActivity);
              }
            }}
            className={styles.modalcontainer}
            selectedActivity={activity.id}
          />
        )}

        {openDeleteModal && (
          <DeleteActivity
            setOpenDeleteModal={(isOpen, deleteActivity) => {
              setOpenDeleteModal(isOpen);
              if (deleteActivity) {
                setCurrentActivity(deleteActivity);
              }
            }}
            className={styles.modalcontainer}
            selectedActivity={activity.id}
            updateActivitiesAfterDelete={updateActivitiesAfterDelete}
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
  updateActivitiesAfterDelete: PropTypes.func.isRequired,
};
