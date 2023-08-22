import { FormContainer } from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettings.styled";
import AccountSettingsChangePasswordModal from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsChangePasswordModal";
import AccountSettingsForm from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsForm";
import AccountSettingsSkeleton from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsSkeleton";
import ErrorAccountSettings from "components/AdminDashboardComponents/AccountSettingsComponents/ErrorAccountSettings";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { AddNewEmployeeFormFooter } from "components/AdminDashboardComponents/EmployeesComponents/AddNewEmployee/AddNewEmployee.styled";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "redux/loadingSlice";
import { usePostStoragePictures } from "services/storage/storageServices";
import {
  useGetUser,
  usePatchUser,
  usePatchUserEmailAddress,
} from "services/user/userServices";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  organizationName: Yup.string().required("Pole wymagane"),
  street: Yup.string().required("Pole wymagane"),
  postalCode: Yup.string().required("Pole wymagane"),
  city: Yup.string().required("Pole wymagane"),
  nip: Yup.string().required("Pole wymagane"),
  krs: Yup.string().required("Pole wymagane"),
  fullName: Yup.string().required("Pole wymagane"),
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("Pole wymagane"),
});

const initialValues: AccountSettingsType = {
  organizationName: "",
  street: "",
  postalCode: "",
  city: "",
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
  postalCode: string;
  city: string;
  nip: string;
  krs: string;
  profilePicture: File | string | null;
  firstName: string;
  lastName: string;
  email: string;
};

const AccountSettingsPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: userData,
    isLoading: userDataIsLoading,
    isSuccess: userDataIsSuccess,
    isError: userDataIsError,
    error: userDataError,
  } = useGetUser();

  const {
    mutate: patchEmailAddressFn,
    isSuccess: patchEmailAddressIsSuccess,
    isLoading: patchEmailAddressIsLoading,
  } = usePatchUserEmailAddress();
  const {
    mutate: patchUserFn,
    isSuccess: patchUserIsSuccess,
    isLoading: patchUserIsLoading,
  } = usePatchUser();
  const {
    mutate: postStorageImgs,
    isSuccess: postStoragePicturesIsSuccess,
    isLoading: postStoragePicturesIsLoading,
  } = usePostStoragePictures();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Wartości formularza:", values);
      if (userData?.email !== values.email)
        patchEmailAddressFn({ email: values.email });

      if (
        userData?.lastName !== values.lastName ||
        userData?.firstName !== values.firstName ||
        userData?.profilePicture !== values.profilePicture
      ) {
        if (
          userData?.profilePicture !== values.profilePicture &&
          values.profilePicture instanceof File
        ) {
          const filesArray = [];
          filesArray.push(values.profilePicture);
          postStorageImgs(filesArray);
        }
        if (
          postStoragePicturesIsSuccess &&
          values.profilePicture &&
          typeof values.profilePicture === "string"
        )
          patchUserFn({
            firstName: values.firstName,
            lastName: values.lastName,
            profilePicture: values.profilePicture,
          });
      }
    },
  });

  useEffect(() => {
    if (
      postStoragePicturesIsLoading ||
      patchEmailAddressIsLoading ||
      patchUserIsLoading
    ) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [
    dispatch,
    postStoragePicturesIsLoading,
    patchEmailAddressIsLoading,
    patchUserIsLoading,
  ]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  if (userDataIsError) {
    console.log(userDataError);
  }

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        title="Ustawienia konta"
        Button={
          <Button
            variant="outline"
            onClick={() => navigate(-1)}>
            Anuluj
          </Button>
        }
      />
      <StyledDashboardEmployeesMainContent>
        {userDataIsError && <ErrorAccountSettings />}
        {userDataIsLoading && <AccountSettingsSkeleton />}
        {userDataIsSuccess && userData && (
          <FormContainer onSubmit={formik.handleSubmit}>
            <AccountSettingsForm
              userData={userData}
              formik={formik}
              handleModalOpen={handleModalOpen}
            />
            <AddNewEmployeeFormFooter>
              <Button
                type="button"
                onClick={() => {
                  navigate(-1);
                }}
                variant="outline">
                Anuluj
              </Button>
              <Button variant="fill">Zapisz</Button>
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
