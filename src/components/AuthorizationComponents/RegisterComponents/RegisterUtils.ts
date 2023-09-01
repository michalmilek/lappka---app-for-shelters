import * as Yup from "yup";

export const RegisterStep1Validation = Yup.object().shape({
  organizationName: Yup.string().required(
    'Pole "Pełna Nazwa Organizacji" jest wymagane'
  ),
  street: Yup.string().required('Pole "Ulica" jest wymagane'),
  zipCode: Yup.string()
    .matches(/^\d{2}-\d{3}$/, "Kod pocztowy powinien być w formacie XX-XXX")
    .required('Pole "Kod pocztowy" jest wymagane'),
  city: Yup.string().required('Pole "Miasto" jest wymagane'),
  nip: Yup.string()
    .required('Pole "Numer NIP" jest wymagane')
    .test(
      "length",
      'Pole "Numer NIP" musi mieć dokładnie 10 znaków',
      (val) => val.length === 10
    ),
  krs: Yup.string()
    .required('Pole "Numer KRS" jest wymagane')
    .test(
      "length",
      'Pole "Numer KRS" musi mieć dokładnie 10 znaków',
      (val) => val.length === 10
    ),
  phoneNumber: Yup.string()
    .matches(/^\d{3}[-\s]?\d{3}[-\s]?\d{3}$/, {
      message:
        "Numer telefonu powinien składać się z 9 cyfr i może zawierać opcjonalnie myślniki lub spacje po trzeciej i szóstej cyfrze",
      excludeEmptyString: true,
    })
    .required('Pole "Numer telefonu" jest wymagane'),
});

export const RegisterStep2Validation = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/, {
      message: "Imię może zawierać tylko litery",
      excludeEmptyString: true,
    })
    .required('Pole "Imię" jest wymagane'),
  lastName: Yup.string()
    .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+(\s+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+)*$/, {
      message:
        "Nazwisko może zawierać tylko litery i musi składać się z przynajmniej dwóch wyrazów oddzielonych spacją",
      excludeEmptyString: true,
    })
    .required('Pole "Nazwisko" jest wymagane'),
  emailAddress: Yup.string()
    .email("Nieprawidłowy format emaila")
    .required("Pole wymagane"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/,
      "Hasło musi zawierać co najmniej 8 znaków, przynajmniej 1 znak nie alfanumeryczny, 1 cyfrę, 1 wielką literę i 1 małą literę"
    )
    .required("Pole wymagane"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Hasła muszą być identyczne")
    .required("Pole wymagane"),
});
