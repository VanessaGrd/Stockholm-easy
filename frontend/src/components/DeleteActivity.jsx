import { React } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import styles from "./EditActivity.module.scss";

export default function DeleteActivity({
  setOpenDeleteModal,
  selectedActivity,
  updateActivitiesAfterDelete,
}) {
  const handleDelete = async () => {
    if (selectedActivity !== "") {
      try {
        const verifyProgram = await APIService.get(
          `/program-user/${selectedActivity}`
        );

        if (verifyProgram && verifyProgram.data.length > 0) {
          // Si l'activité est présente dans la table "program", supprimer d'abord de "program"
          await APIService.delete(`/program/${selectedActivity}`);
          await APIService.delete(`/activity/${selectedActivity}`);
        } else {
          // Si l'activité n'est pas présente dans la table "program", supprimer directement de "activity"
          await APIService.delete(`/activity/${selectedActivity}`);
        }
        toast.success("L'activité a bien été supprimée.", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          icon: "👍",
        });
        setOpenDeleteModal(false);
        updateActivitiesAfterDelete();
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
  updateActivitiesAfterDelete: PropTypes.func.isRequired,
  selectedActivity: PropTypes.number.isRequired,
  setOpenDeleteModal: PropTypes.bool.isRequired,
};
