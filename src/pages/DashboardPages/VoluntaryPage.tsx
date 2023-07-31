import DashboardNavbar from "components/AdminDashboardComponents/DashboardNavbar";
import { StyledProtectedPageContent } from "components/AdminDashboardComponents/ProtectedPage.styled";
import {
  StyledDashboardFooter,
  StyledDashboardVoluntaryContent,
  StyledDashboardVoluntaryMainContent,
  StyledDashboardVoluntaryMainContentFormsContainer,
} from "components/AdminDashboardComponents/VoluntaryComponents/DashboardVoluntary.styled";
import VoluntaryForm from "components/AdminDashboardComponents/VoluntaryComponents/VoluntaryForm/VoluntaryForm";
import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

const initialFormValues = {
  bankAccountNumber: "",
  donationDescription: "",
  dailyHelpDescription: "",
  takingDogsOutDescription: "",
  isDonationActive: false,
  isDailyHelpActive: false,
  isTakingDogsOutActive: false,
};

const validationSchema = Yup.object().shape({
  bankAccountNumber: Yup.string().matches(
    /^(\d{2}-?\d{4}-?\d{4}-?\d{4}-?\d{4}-?\d{4}|\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}|\d{26})$/,
    "Numer konta musi składać się z 26 cyfr, oddzielonych spacjami, myślnikami lub bez separatorów."
  ),
});

export type FormikType = FormikProps<typeof initialFormValues>;

const VoluntaryPage = () => {
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledProtectedPageContent>
      <DashboardNavbar title="Wolontariat" />
      <StyledDashboardVoluntaryMainContent>
        <StyledDashboardVoluntaryMainContentFormsContainer
          onSubmit={formik.handleSubmit}>
          <StyledDashboardVoluntaryContent>
            <VoluntaryForm
              fieldName="isDonationActive"
              formik={formik}
              text="Wpłać darowiznę">
              <Input
                onBlur={formik.handleBlur}
                placeholder="0000-0000-0000-0000"
                inputSize="Large"
                label="Podaj numer konta"
                value={formik.values.bankAccountNumber}
                onChange={formik.handleChange}
                name="bankAccountNumber"
                error={
                  formik.errors.bankAccountNumber &&
                  formik.touched.bankAccountNumber
                    ? formik.errors.bankAccountNumber
                    : null
                }
              />
              <Textarea
                label="Opis"
                value={formik.values.donationDescription}
                onChange={formik.handleChange}
                name="donationDescription"
              />
            </VoluntaryForm>
            <VoluntaryForm
              fieldName="isDailyHelpActive"
              formik={formik}
              text="Codzienna pomoc">
              <Textarea
                label="Opis"
                value={formik.values.dailyHelpDescription}
                onChange={formik.handleChange}
                name="dailyHelpDescription"
              />
            </VoluntaryForm>
            <VoluntaryForm
              fieldName="isTakingDogsOutActive"
              formik={formik}
              text="Wyprowadzanie psów">
              <Textarea
                label="Opis"
                value={formik.values.takingDogsOutDescription}
                onChange={formik.handleChange}
                name="takingDogsOutDescription"
              />
            </VoluntaryForm>
          </StyledDashboardVoluntaryContent>
          <StyledDashboardFooter>
            <Button type="submit">Zapisz</Button>
          </StyledDashboardFooter>
        </StyledDashboardVoluntaryMainContentFormsContainer>
      </StyledDashboardVoluntaryMainContent>
    </StyledProtectedPageContent>
  );
};

export default VoluntaryPage;
