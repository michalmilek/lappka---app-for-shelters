import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy format adresu email")
    .required('Pole "Email" jest wymagane'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
      "Hasło musi zawierać co najmniej 8 znaków, przynajmniej 1 znak nie alfanumeryczny, 1 cyfrę, 1 wielką literę i 1 małą literę"
    )
    .required("Pole 'Hasło' jest wymagane"),
});
