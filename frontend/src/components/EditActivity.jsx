import { React, useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import PropTypes from "prop-types";
import axios from "axios";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import styles from "../pages/AdminAdd.module.scss";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function EditActivity({
  setOpenModal,
  selectedActivity,
  setActivities,
}) {
  const [activity, setActivity] = useState({
    name: "",
    address: "",
    openingHours: "",
    price: "",
    picture: "",
  });
  useEffect(() => {
    APIService.get(`/activity/${selectedActivity}`)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const boxStyle = {
    width: "70vw",
    height: "60vh",
  };
  const handleEdit = async (e) => {
    e.preventDefault();
    if (selectedActivity !== "") {
      try {
        const res = await APIService.put(
          `/activity/${selectedActivity}`,
          activity
        );

        if (res) {
          useEffect(() => {
            axios
              .get(`${apiBaseUrl}/activity`)
              .then((response) => setActivities(response.data))
              .catch((err) => console.error(err));
          }, []);
        } else {
          throw new Error();
        }
      } catch (err) {
        if (err.request?.status === 500) {
          toast.error("Problème lors de l'inscription", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }
    }
  };
  const handleChange = async (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div className={styles.pageContainer}>
      <button type="button" onClick={handleClose} className={styles.close}>
        X
      </button>
      <form className={styles.form}>
        <h2>Tableau de bord</h2>
        <Box
          style={boxStyle}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              name="name"
              label="Nom"
              type="text"
              onChange={handleChange}
              value={activity.name}
            />{" "}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              label="Adresse"
              name="address"
              type="text"
              onChange={handleChange}
              value={activity.address}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              label="Hoaires d'ouverture"
              name="openingHours"
              type="text"
              onChange={handleChange}
              value={activity.openingHours}
            />{" "}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              label="Prix"
              name="price"
              type="prix"
              onChange={handleChange}
              value={activity.price}
            />{" "}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              id="outlined-basic"
              label="Image"
              name="picture"
              type="text"
              onChange={handleChange}
              value={activity.picture}
            />{" "}
          </Box>
          <div className={styles.button}>
            <button type="submit" onClick={handleEdit}>
              Modifier
            </button>
          </div>
        </Box>
        <ToastContainer />
      </form>
    </div>
  );
}

EditActivity.propTypes = {
  setActivities: PropTypes.func.isRequired,
  selectedActivity: PropTypes.number.isRequired,
  setOpenModal: PropTypes.string.isRequired,
};
