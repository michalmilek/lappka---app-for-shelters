import * as Yup from "yup";

export const setPasswordValidation = Yup.object().shape({
  password: Yup.string()
    .min(6, "Hasło musi mieć co najmniej 6 znaków")
    .required("Pole 'Hasło' jest wymagane"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Hasła muszą być identyczne")
    .required("Pole 'Potwierdź hasło' jest wymagane"),
});
