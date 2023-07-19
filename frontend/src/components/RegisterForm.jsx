import { useFormik } from "formik";
import { Box, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import styles from "./RegisterForm.module.scss";
import validationSchema from "../services/validator";

export default function InscriptionForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,

    onSubmit: () => {
      APIService.post(`/user`, formik.values)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            toast.error("Problème lors de l'inscription", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    },
  });
  const boxStyle = {
    width: "70vw",
    height: "60vh",
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
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <h2>Inscription</h2>
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
            name="lastname"
            label="Nom"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />{" "}
          {formik.touched.lastname && formik.errors.lastname && (
            <div className={styles.error}>{formik.errors.lastname}</div>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Prénom"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          {formik.touched.firstname && formik.errors.firstname && (
            <div className={styles.error}>{formik.errors.firstname}</div>
          )}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{" "}
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}{" "}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Mot de passe"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />{" "}
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}{" "}
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <TextField
            id="outlined-basic"
            label="Confirmation mot de passe"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />{" "}
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className={styles.error}>{formik.errors.confirmPassword}</div>
          )}{" "}
        </Box>
        <div className={styles.button}>
          <button type="submit" onClick={handleClick}>
            Créer
          </button>
        </div>
      </Box>
      <ToastContainer />
    </form>
  );
}
