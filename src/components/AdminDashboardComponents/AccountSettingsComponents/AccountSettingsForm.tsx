import Button from "components/SharedComponents/Button/Button";
import { UserRemoveIcon } from "components/SharedComponents/icons/icons";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { FormikProps } from "formik";
import { AccountSettingsType } from "pages/DashboardPages/AccountSettingsPage";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      formik.setFieldValue("phoneNumber", shelterData.phoneNumber);
    }
  }, [shelterData, userData]);

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
          {t("organisationSettings.organisationSettings")}
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
          label={t("organisationSettings.organisationName")}
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
          label={t("organisationSettings.street")}
        />
        <Input
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.phoneNumber && formik.touched.phoneNumber
              ? formik.errors.phoneNumber
              : null
          }
          label={t("organisationSettings.phoneNumber")}
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
              label={t("organisationSettings.zipCode")}
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
            label={t("organisationSettings.city")}
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
          label={t("organisationSettings.nip")}
        />
        <Input
          name="krs"
          value={formik.values.krs}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.errors.krs && formik.touched.krs ? formik.errors.krs : null
          }
          label={t("organisationSettings.krs")}
        />
      </InputsFirstPartContainer>
      <InputsFirstPartContainer>
        <Typography
          variant="Heading 18 Semi Bold"
          tag="h2">
          {t("accountSettings.accountSettings")}
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
              ? t("accountSettings.edit")
              : t("accountSettings.changeProfilePicture")}
          </Button>
          {formik.values.profilePicture && (
            <Button
              type="button"
              onClick={() => {
                formik.setFieldValue("profilePicture", "");
              }}
              variant="fill"
              color="error">
              {t("accountSettings.deleteProfilePicture")}
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
          label={t("accountSettings.firstName")}
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
          label={t("accountSettings.lastName")}
        />
        <Input
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label={t("accountSettings.email")}
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
            {t("accountSettings.deleteAccount")}
          </Button>
          <Button
            type="button"
            onClick={handleModalOpen}>
            {t("accountSettings.changePassword")}
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
