import { React } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import styles from "./DeleteActivity.module.scss";

export default function DeleteActivity({
  setOpenDeleteModal,
  selectedActivity,
}) {
  const handleDelete = async () => {
    if (selectedActivity !== "") {
      // verifie qu'une note a bien été sélectionnée
      try {
        const res = await APIService.delete(`/activity/${selectedActivity}`);
        if (res) {
          toast
            .success("L'activité a bien été supprimée.", {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
              icon: "👍",
            })
            .catch((error) => console.error(error));
        } else {
          throw new Error();
        }
      } catch (error) {
        if (error.request?.status === 500) {
          toast.error("Problème lors de la suppression de l'activité.", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    }
  };
  const handleDeleteClose = () => {
    setOpenDeleteModal(false);
  };
  return (
    <div className={styles.modaleContainer}>
      <button
        type="button"
        onClick={handleDeleteClose}
        className={styles.buttonClose}
      >
        X
      </button>
      <p>Etes-vous sûr de vouloir supprimer cette activité ?</p>
      <button type="button" onClick={handleDelete}>
        Supprimer
      </button>
    </div>
  );
}

DeleteActivity.propTypes = {
  selectedActivity: PropTypes.number.isRequired,
  setOpenDeleteModal: PropTypes.bool.isRequired,
};
