import { React } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import APIService from "../services/APIService";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo2.svg";
import styles from "./Login.module.scss";

export default function Login() {
  const validationSchema = yup.object({
    email: yup
      .string("Entrez votre adresse mail")
      .email("Entrez une adresse mail valide")
      .required("Une adresse mail est requise"),
    password: yup
      .string("Entrez votre mot de passe")
      .min(8, "Le mot de passe doit être de 8 caractères minimum")
      .max(30, "Le mot de passe ne doit pas dépasser 30 caractères")
      .required("Le mot de passe est requis"),
  });

  const { login } = useUserContext();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: () => {
      APIService.post(`/login`, formik.values)
        .then(({ data: user }) => {
          login(user);
          if (user.role === "user") {
            toast.success(
              `Bienvenue ${user.firstname}! Vous allez être redirigé vers la page d'accueil.`,
              {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                icon: "👍",
              }
            );
            setTimeout(() => {
              navigate("/choice");
            }, 3000);
          } else if (user.role === "admin") {
            toast.success(
              `Bienvenue ${user.firstname}! Vous allez être redirigé vers votre dashboard.`,
              {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                icon: "👍",
              }
            );
            setTimeout(() => {
              navigate("/admin-dashbord");
            }, 3000);
          }
        })
        .catch((error) => {
          if (error.response?.status === 401) {
            toast.error("Email et/ou mot de passe incorrect(s)", {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.error("Veuillez réessayer plus tard", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    },
  });

  const handleClick = () => {
    if (formik.errors.email) {
      toast.error(`${formik.errors.email}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    if (formik.errors.password) {
      toast.error(`${formik.errors.password}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={styles.login_box}>
        <h3>Veuillez rentrer vos identifiants</h3>
        <form action="login" onSubmit={formik.handleSubmit}>
          <div className={styles.inputContainer}>
            <TextField
              type="email"
              name="email"
              id="email"
              label="Votre email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />

            <TextField
              type="password"
              name="password"
              id="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Button onClick={handleClick} variant="contained" type="submit">
              Connexion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
