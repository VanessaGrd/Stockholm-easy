import { React } from "react";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import { Box, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddActivity.module.scss";
import validationSchema from "../services/validatorActivity";

export default function AddActivity({ setOpenAddModal }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      openingHours: "",
      price: "",
      picture: "",
    },
    validationSchema,

    onSubmit: () => {
      APIService.post(`/activity`, formik.values)
        .then(() => {
          toast.success("L'activité a bien été ajoutée.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            icon: "👍",
          });
          setTimeout(() => {
            navigate("/admin-dashbord");
          }, 3000);
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            toast.error("Problème lors de l'ajout de l'activité", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    },
  });
  const handleDeleteClose = () => {
    setOpenAddModal(false);
  };
  const boxStyle = {
    width: "70vw",
    height: "60vh",
  };

  const inputStyle = {
    margin: "20px",
  };
  const handleClick = () => {
    if (!formik.isValid) {
      toast.error("Champ manquant", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className={styles.modaleContainer}>
      <h2>Ajoutez une nouvelle activité ! </h2>
      <button
        type="button"
        onClick={handleDeleteClose}
        className={styles.buttonClose}
      >
        X
      </button>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Box
          style={boxStyle}
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
              style={inputStyle}
              id="outlined-basic"
              name="name"
              label="Nom"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />{" "}
            {formik.touched.name && formik.errors.name && (
              <div className={styles.error}>{formik.errors.name}</div>
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              style={inputStyle}
              id="outlined-basic"
              label="Adresse"
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address && (
              <div className={styles.error}>{formik.errors.address}</div>
            )}
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              style={inputStyle}
              id="outlined-basic"
              label="Hoaires d'ouverture"
              name="openingHours"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.openingHours}
            />{" "}
            {formik.touched.openingHours && formik.errors.openingHours && (
              <div className={styles.error}>{formik.errors.openingHours}</div>
            )}{" "}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              style={inputStyle}
              id="outlined-basic"
              label="Prix"
              name="price"
              type="prix"
              onChange={formik.handleChange}
              value={formik.values.price}
            />{" "}
            {formik.touched.price && formik.errors.price && (
              <div className={styles.error}>{formik.errors.price}</div>
            )}{" "}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              style={inputStyle}
              id="outlined-basic"
              label="Image"
              name="picture"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.picture}
            />{" "}
            {formik.touched.picture && formik.errors.picture && (
              <div className={styles.error}>{formik.errors.picture}</div>
            )}{" "}
            <div className={styles.button}>
              <button type="submit" onClick={handleClick}>
                Ajouter
              </button>
            </div>
          </Box>
        </Box>
      </form>
    </div>
  );
}
AddActivity.propTypes = {
  setOpenAddModal: PropTypes.bool.isRequired,
};
