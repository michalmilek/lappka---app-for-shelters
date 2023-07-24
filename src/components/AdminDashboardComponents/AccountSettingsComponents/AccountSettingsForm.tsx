import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { FormikProps } from "formik";
import { AccountSettingsType } from "pages/DashboardPages/AccountSettingsPage";
import React from "react";
import {
  AccountSettingsIMG,
  AvatarChangeContainer,
  ButtonContainer,
  InputsFirstPartContainer,
  PostalCodeCityContainer,
  PostalCodeContainer,
} from "./AccountSettings.styled";

const AccountSettingsForm = ({
  formik,
}: {
  formik: FormikProps<AccountSettingsType>;
}) => {
  return (
    <>
      <InputsFirstPartContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h2">
          Ustawienia organizacji
        </Typography>
        <Input
          name="organizationName"
          value={formik.values.organizationName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.organizationName && formik.touched.organizationName
              ? formik.errors.organizationName
              : null
          }
          label="Pełna nazwa organizacji"
        />
        <Input
          name="street"
          value={formik.values.street}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.street && formik.touched.street
              ? formik.errors.street
              : null
          }
          label="Ulica"
        />
        <PostalCodeCityContainer>
          <PostalCodeContainer>
            <Input
              name="postalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.postalCode && formik.touched.postalCode
                  ? formik.errors.postalCode
                  : null
              }
              label="Kod pocztowy"
            />
          </PostalCodeContainer>
          <Input
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.city && formik.touched.city
                ? formik.errors.city
                : null
            }
            label="Miasto"
          />
        </PostalCodeCityContainer>
        <Input
          name="nip"
          value={formik.values.nip}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.nip && formik.touched.nip ? formik.errors.nip : null
          }
          label="Numer NIP"
        />
        <Input
          name="krs"
          value={formik.values.krs}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.krs && formik.touched.krs ? formik.errors.krs : null
          }
          label="Numer KRS"
        />
      </InputsFirstPartContainer>
      <InputsFirstPartContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h2">
          Ustawienia użytkownika
        </Typography>
        <AvatarChangeContainer>
          <AccountSettingsIMG
            src="https://styles.redditmedia.com/t5_2z977/styles/communityIcon_krjidju88kd71.png"
            alt=""
          />
          <Button variant="outline">Edytuj</Button>
        </AvatarChangeContainer>

        <Input
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.fullName && formik.touched.fullName
              ? formik.errors.fullName
              : null
          }
          label="Imię i nazwisko"
        />
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Adres e-mail"
          error={
            formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null
          }
        />
        <ButtonContainer>
          <Button>Delete account</Button>
          <Button>Zmień hasło</Button>
        </ButtonContainer>
      </InputsFirstPartContainer>
    </>
  );
};

export default AccountSettingsForm;
