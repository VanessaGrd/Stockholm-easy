import * as Yup from "yup";

const validationSchema = Yup.object({
  firstname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("*"),
  lastname: Yup.string().max(20, "Must be 20 characters or less").required("*"),
  email: Yup.string().email("Invalid email").required("*"),
  password: Yup.string("Entrez votre mot de passe")
    .min(8, "Le mot de passe doit être de 8 caractères minimum")
    .max(30, "Le mot de passe ne doit pas dépasser 30 caractères")
    .required("*"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Le mot de passe doit être identique")
    .required("*"),
  birthdate: Yup.date().required("*"),
});

export default validationSchema;
