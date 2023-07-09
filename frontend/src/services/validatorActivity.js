import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().max(50, "Must be 50 characters or less").required("*"),
  address: Yup.string().max(50, "Must be 50 characters or less").required("*"),
  openingHours: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("*"),
  price: Yup.number().positive().required("*"),
  picture: Yup.string()
    .max(200, "Must be 200 characters or less")
    .required("*"),
});

export default validationSchema;
