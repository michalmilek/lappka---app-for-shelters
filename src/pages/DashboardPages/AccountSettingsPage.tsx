import { useQueryClient } from "@tanstack/react-query";
import { FormContainer } from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettings.styled";
import AccountSettingsChangePasswordModal from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsChangePasswordModal";
import AccountSettingsForm from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsForm";
import AccountSettingsSkeleton from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsSkeleton";
import ErrorAccountSettings from "components/AdminDashboardComponents/AccountSettingsComponents/ErrorAccountSettings";
import useAccountSettingsValidation from "components/AdminDashboardComponents/AccountSettingsComponents/useAccountSettingsValidation";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { AddNewEmployeeFormFooter } from "components/AdminDashboardComponents/EmployeesComponents/AddNewEmployee/AddNewEmployee.styled";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGetShelter } from "services/pet/petServices";
import { ShelterUpdate } from "services/shelter/shelter";
import { usePutShelter } from "services/shelter/shelterServices";
import { usePostStoragePictures } from "services/storage/storageServices";
import {
  useDeleteProfilePicture,
  useGetUser,
  usePatchUser,
  usePatchUserEmailAddress,
} from "services/user/userServices";
import { ObjectsComparisionFn, SingleObject } from "utils/appUtils";

const initialValues: AccountSettingsType = {
  organizationName: "",
  street: "",
  zipCode: "",
  city: "",
  phoneNumber: "",
  nip: "",
  krs: "",
  profilePicture: "",
  firstName: "",
  lastName: "",
  email: "",
};

export type AccountSettingsType = {
  organizationName: string;
  street: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  nip: string;
  krs: string;
  profilePicture: File | string | null;
  firstName: string;
  lastName: string;
  email: string;
};

const AccountSettingsPage = () => {
  const { t } = useTranslation();
  const { accountSettingsValidation } = useAccountSettingsValidation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    data: userData,
    isLoading: userDataIsLoading,
    isSuccess: userDataIsSuccess,
    isError: userDataIsError,
  } = useGetUser();

  const {
    data: shelterData,
    isLoading: shelterDataIsLoading,
    isSuccess: shelterDataIsSuccess,
    isError: shelterDataIsError,
  } = useGetShelter();

  const { mutate: patchEmailAddressFn } = usePatchUserEmailAddress();
  const { mutate: patchUserFn } = usePatchUser();
  const { mutate: postStorageImgs } = usePostStoragePictures();
  const { mutate: putShelterFn } = usePutShelter();
  const { mutate: deleteProfilePictureFn } = useDeleteProfilePicture();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: accountSettingsValidation,
    onSubmit: (values) => {
      if (
        ObjectsComparisionFn(
          shelterData as unknown as SingleObject,
          values as unknown as SingleObject,
          [
            "organizationName",
            "city",
            "street",
            "zipCode",
            "nip",
            "krs",
            "phoneNumber",
          ]
        )
      ) {
        const { firstName, lastName, email, profilePicture, ...formValues } =
          values;
        putShelterFn({
          longitude: shelterData!.longitude,
          latitude: shelterData!.latitude,
          ...formValues,
        } as ShelterUpdate);
      }

      if (userData?.email !== values.email) {
        patchEmailAddressFn({ email: values.email });
      }

      if (
        ObjectsComparisionFn(
          userData as unknown as SingleObject,
          values as unknown as SingleObject,
          ["firstName", "lastName", "profilePicture"]
        )
      ) {
        if (
          userData?.profilePicture !== values.profilePicture &&
          values.profilePicture instanceof File
        ) {
          if (userData?.profilePicture) {
            deleteProfilePictureFn();
          }
          postStorageImgs([values.profilePicture], {
            onSuccess: (data) => {
              if (data[0]) {
                patchUserFn({
                  firstName: values.firstName,
                  lastName: values.lastName,
                  profilePicture: data[0],
                });
              }
            },
          });
        } else if (
          formik.values.profilePicture === "" &&
          userData?.profilePicture
        ) {
          deleteProfilePictureFn(undefined, {
            onSuccess: () => {
              patchUserFn({
                firstName: values.firstName,
                lastName: values.lastName,
                profilePicture: values.profilePicture as string,
              });
            },
          });
        } else {
          if (userData) {
            patchUserFn({
              firstName: values.firstName,
              lastName: values.lastName,
              profilePicture: userData?.profilePicture,
            });
          }
        }
      }
    },
  });

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        title="Ustawienia konta"
        Button={
          <Button
            variant="outline"
            onClick={() => navigate(-1)}>
            {t("buttons.cancel")}
          </Button>
        }
      />
      <StyledDashboardEmployeesMainContent>
        {(userDataIsError || shelterDataIsError) && <ErrorAccountSettings />}
        {(userDataIsLoading || shelterDataIsLoading) && (
          <AccountSettingsSkeleton />
        )}
        {userDataIsSuccess &&
          userData &&
          shelterData &&
          shelterDataIsSuccess && (
            <FormContainer onSubmit={formik.handleSubmit}>
              <AccountSettingsForm
                userData={userData}
                shelterData={shelterData}
                formik={formik}
                handleModalOpen={handleModalOpen}
              />
              <AddNewEmployeeFormFooter>
                <Button
                  type="button"
                  onClick={() => {
                    queryClient.invalidateQueries(["shelter"]);
                    queryClient.invalidateQueries(["user"]);
                  }}
                  variant="outline">
                  {t("buttons.cancel")}
                </Button>
                <Button
                  type="submit"
                  variant="fill">
                  {t("buttons.save")}
                </Button>
              </AddNewEmployeeFormFooter>
            </FormContainer>
          )}
        <AccountSettingsChangePasswordModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default AccountSettingsPage;
