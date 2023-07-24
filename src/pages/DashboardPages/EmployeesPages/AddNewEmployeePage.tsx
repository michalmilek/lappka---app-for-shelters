import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import {
  AddNewEmployeeForm,
  AddNewEmployeeFormFooter,
  AddNewEmployeeFormText,
  AddNewEmployeeInputContainer,
} from "components/AdminDashboardComponents/EmployeesComponents/AddNewEmployee/AddNewEmployee.styled";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";


const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy adres email")
    .required("Pole email jest wymagane"),
});

const AddNewEmployeePage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Obsługa zdarzenia po przesłaniu formularza
      console.log("Wartości formularza:", values);
    },
  });

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar
        previousTitle="Pracownicy /"
        title="Nowa karta"
      />
      <StyledDashboardEmployeesMainContent>
        <AddNewEmployeeForm>
          <AddNewEmployeeFormText>
            <Typography
              variant="UI/UI Text 16 Semi Bold"
              tag="h2">
              Dodaj pracownika
            </Typography>
            <Typography
              variant="UI Small/UI Text 12 Reg"
              tag="p"
              color="midGray1">
              Wpisz adres email użytkownika aplikacji Łappka i dodaj go do
              swojej organizacji.
            </Typography>
          </AddNewEmployeeFormText>
          <AddNewEmployeeInputContainer>
            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              label="Adres email"
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
          </AddNewEmployeeInputContainer>
          <AddNewEmployeeFormFooter>
            <Button variant="outline">Anuluj</Button>
            <Button variant="fill">Dodaj</Button>
          </AddNewEmployeeFormFooter>
        </AddNewEmployeeForm>
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default AddNewEmployeePage;
