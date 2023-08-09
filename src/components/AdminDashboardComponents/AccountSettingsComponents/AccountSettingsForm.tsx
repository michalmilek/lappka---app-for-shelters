import Button from "components/SharedComponents/Button/Button";
import { UserRemoveIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { FormikProps } from "formik";
import useToast from "hooks/useToast";
import { AccountSettingsType } from "pages/DashboardPages/AccountSettingsPage";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { GetUserResponse } from "services/user/user";
import { useDeleteProfilePicture } from "services/user/userServices";
import { createImgURL } from "utils/appUtils";
import {
  AccountSettingsIMG,
  AvatarChangeContainer,
  ButtonContainer,
  InputsFirstPartContainer,
  PostalCodeCityContainer,
  PostalCodeContainer,
} from "./AccountSettings.styled";
import AccountSettingsDeleteUser from "./AccountSettingsDeleteUser";

const AccountSettingsForm = ({
  formik,
  userData,
  handleModalOpen,
}: {
  formik: FormikProps<AccountSettingsType>;
  userData: GetUserResponse;
  handleModalOpen: () => void;
}) => {
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const handleCloseDeleteUserModal = useCallback(() => {
    setDeleteUserModal(false);
  }, [setDeleteUserModal]);

  useEffect(() => {
    if (userData) {
      formik.setFieldValue("firstName", userData.firstName);
      formik.setFieldValue("lastName", userData.lastName);
      formik.setFieldValue("emaik", userData.email);
      formik.setFieldValue("profilePicture", userData.profilePicture);
    }
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      formik.setFieldValue("avatar", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("avatarPreview", reader.result as string);
      };
      reader.readAsDataURL(file);
      console.log(file);
    }
  };

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const {
    mutate: deleteProfilePictureFn,
    isSuccess: deleteProfilePictureIsSuccess,
    isLoading: deleteProfilePictureIsLoading,
    isError: deleteProfilePictureIsError,
    error: deleteProfilePictureError,
  } = useDeleteProfilePicture();

  const dispatch = useDispatch();
  const { showToast } = useToast();

  useEffect(() => {
    if (deleteProfilePictureIsLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [deleteProfilePictureIsLoading, dispatch]);

  useEffect(() => {
    if (deleteProfilePictureIsSuccess) {
      showToast("Zdjęcie zostało usunięte pomyślnie", "success");
      formik.setFieldValue("photos", null);
    }
  }, [deleteProfilePictureIsSuccess, dispatch, formik, showToast]);

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
          {formik.values.profilePicture && (
            <AccountSettingsIMG
              src={
                createImgURL(formik.values.profilePicture) ||
                "https://styles.redditmedia.com/t5_2z977/styles/communityIcon_krjidju88kd71.png"
              }
              alt=""
            />
          )}
          <Button
            type="button"
            onClick={() => {
              if (fileUploadRef.current) {
                fileUploadRef.current.click();
              }
            }}
            variant="outline">
            {formik.values.profilePicture
              ? "Edytuj"
              : "Wybierz zdjęcie profilowe"}
          </Button>
          {formik.values.profilePicture && (
            <Button
              type="button"
              onClick={() => {
                try {
                  deleteProfilePictureFn();
                } catch (error) {
                  console.log(error);
                }
              }}
              variant="fill"
              color="error">
              Usuń zdjęcie profilowe
            </Button>
          )}
          <input
            hidden
            ref={fileUploadRef}
            id="avatar"
            name="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarChangeContainer>

        <Input
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.firstName && formik.touched.firstName
              ? formik.errors.firstName
              : null
          }
          label="Imię"
        />
        <Input
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.lastName && formik.touched.lastName
              ? formik.errors.lastName
              : null
          }
          label="Nazwisko"
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
          <Button
            onClick={() => setDeleteUserModal(true)}
            type="button"
            icon={<UserRemoveIcon />}
            iconPlace="right"
            color="red500">
            Usuń konto
          </Button>
          <Button
            type="button"
            onClick={handleModalOpen}>
            Zmień hasło
          </Button>
        </ButtonContainer>
      </InputsFirstPartContainer>
      <AccountSettingsDeleteUser
        onClose={handleCloseDeleteUserModal}
        isOpen={deleteUserModal}
      />
    </>
  );
};

export default AccountSettingsForm;
