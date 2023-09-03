import Button from "components/SharedComponents/Button/Button";
import { UserRemoveIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { FormikProps } from "formik";
import { AccountSettingsType } from "pages/DashboardPages/AccountSettingsPage";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { GetShelterRespones } from "services/pet/petTypes";
import { useGetStorageImagesForUser } from "services/storage/storageServices";
import { GetUserResponse } from "services/user/user";
import { useDeleteProfilePicture } from "services/user/userServices";
import toastService from "singletons/toastService";
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
  shelterData,
  userData,
  handleModalOpen,
}: {
  formik: FormikProps<AccountSettingsType>;
  userData: GetUserResponse;
  handleModalOpen: () => void;
  shelterData: GetShelterRespones;
}) => {
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  const handleCloseDeleteUserModal = useCallback(() => {
    setDeleteUserModal(false);
  }, [setDeleteUserModal]);

  const { data: userProfilePicture } = useGetStorageImagesForUser(
    userData.profilePicture,
    userData.id
  );

  useEffect(() => {
    if (userData) {
      formik.setFieldValue("firstName", userData.firstName);
      formik.setFieldValue("lastName", userData.lastName);
      formik.setFieldValue("email", userData.email);
      formik.setFieldValue("profilePicture", userData.profilePicture);
      formik.setFieldValue("organizationName", shelterData.organizationName);
      formik.setFieldValue("street", shelterData.street);
      formik.setFieldValue("city", shelterData.city);
      formik.setFieldValue("zipCode", shelterData.zipCode);
      formik.setFieldValue("krs", shelterData.krs);
      formik.setFieldValue("nip", shelterData.nip);
    }
  }, []);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    const maxSize = 15 * 1024 * 1024;
    if (file) {
      if (file.size > maxSize) {
        toastService.showToast(
          "Maksymalny dopuszczalny rozmiar pliku to 15mb",
          "error"
        );
      } else {
        formik.setFieldValue("profilePicture", file);
      }
    } else {
      toastService.showToast("Nastąpił problem z wybraniem pliku", "error");
    }
  };

  const fileUploadRef = useRef<HTMLInputElement>(null);

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
              name="zipCode"
              value={formik.values.zipCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors.zipCode && formik.touched.zipCode
                  ? formik.errors.zipCode
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
                (formik.values.profilePicture &&
                formik.values.profilePicture instanceof File
                  ? createImgURL(formik.values.profilePicture as File)
                  : userProfilePicture) as string
              }
              alt={`${userData.firstName + userData.lastName} Profile Picture`}
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
                formik.setFieldValue("profilePicture", "");
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
