const validateUser = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  const errors = [];
  const emailRegex = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,3}/;

  if (firstname == null) {
    errors.push({ field: "firstname", message: "This field is required" });
  }
  if (lastname == null) {
    errors.push({ field: "lastname", message: "This field is required" });
  }
  if (password == null) {
    errors.push({
      field: "password",
      message: "This field is required",
    });
  }
  if (!emailRegex.test(email)) {
    errors.push({ field: "email", message: "Invalid email" });
  }
  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};
module.exports = { validateUser };
