import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import {
  AddNewEmployeeForm,
  AddNewEmployeeFormFooter,
  AddNewEmployeeFormText,
  AddNewEmployeeInputContainer,
} from "components/AdminDashboardComponents/EmployeesComponents/AddNewEmployee/AddNewEmployee.styled";
import { StyledDashboardEmployeesMainContent } from "components/AdminDashboardComponents/EmployeesComponents/DashboardEmployees.styled";
import { StyledProtectedPageContent } from "components/PagesComponents/ProtectedPage.styled";
import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
              {t("addEmployee.addEmployee")}
            </Typography>
            <Typography
              variant="UI Small/UI Text 12 Reg"
              tag="p"
              color="midGray1">
              {t("addEmployee.addEmployeeDesc")}
            </Typography>
          </AddNewEmployeeFormText>
          <AddNewEmployeeInputContainer>
            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              label={t("addEmployee.email")}
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
          </AddNewEmployeeInputContainer>
          <AddNewEmployeeFormFooter>
            <Button variant="outline">{t("addEmployee.cancel")}</Button>
            <Button variant="fill">{t("addEmployee.add")}</Button>
          </AddNewEmployeeFormFooter>
        </AddNewEmployeeForm>
      </StyledDashboardEmployeesMainContent>
    </StyledProtectedPageContent>
  );
};

export default AddNewEmployeePage;
