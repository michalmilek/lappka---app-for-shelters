import {
  AccountSettingsIMG,
  AvatarChangeContainer,
  ButtonContainer,
  FormContainer,
  InputsFirstPartContainer,
  PostalCodeCityContainer,
  PostalCodeContainer,
} from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettings.styled";
import AccountSettingsForm from "components/AdminDashboardComponents/AccountSettingsComponents/AccountSettingsForm";
import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { AddNewEmployeeFormFooter } from "components/AdminDashboardComponents/EmployeesComponents/AddNewEmployee/AddNewEmployee.styled";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
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

const initialValues = {
  organizationName: "",
  street: "",
  postalCode: "",
  city: "",
  nip: "",
  krs: "",
  avatar: "",
  avatarPreview: "",
  fullName: "",
  email: "",
};

export type AccountSettingsType = typeof initialValues;

const AccountSettingsPage = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Wartości formularza:", values);
    },
  });

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
        <FormContainer onSubmit={formik.handleSubmit}>
          <AccountSettingsForm formik={formik} />
          <AddNewEmployeeFormFooter>
            <Button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
              variant="outline">
              Anuluj
            </Button>
            <Button variant="fill">Dodaj</Button>
          </AddNewEmployeeFormFooter>
        </FormContainer>
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default AccountSettingsPage;
