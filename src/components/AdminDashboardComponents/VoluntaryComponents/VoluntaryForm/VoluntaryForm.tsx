import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Textarea from "components/SharedComponents/Inputs/TextArea";
import React from "react";
import {
  StyledDashboardFooter,
  StyledDashboardVoluntaryContent,
  StyledDashboardVoluntaryMainContentFormsContainer,
} from "../DashboardVoluntary.styled";
import VoluntaryFormPart from "./VoluntaryFormPart";
import * as Yup from "yup";
import { FormikProps, useFormik } from "formik";
import { ShelterVolunteeringResponse } from "services/pet/pet";
import { useUpdateShelterVolunteering } from "services/pet/petServices";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";

interface Props {
  data: ShelterVolunteeringResponse;
}

const validationSchema = Yup.object().shape({
  bankAccountNumber: Yup.string().matches(
    /^(\d{2}-?\d{4}-?\d{4}-?\d{4}-?\d{4}-?\d{4}|\d{2}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}|\d{26})$/,
    "Numer konta musi składać się z 26 cyfr, oddzielonych spacjami, myślnikami lub bez separatorów."
  ),
});

export type FormikType = FormikProps<ShelterVolunteeringResponse>;

const VoluntaryForm = ({ data }: Props) => {
  const dispatch = useDispatch();
  const {
    isLoading,
    mutateAsync,
    data: putData,
    isError,
    error,
    isSuccess,
  } = useUpdateShelterVolunteering();

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const cleanedBankAccountNumber = values.bankAccountNumber.replace(
        /[\s-]/g,
        ""
      );
      console.log("🚀 ~ cleanedBankAccountNumber:", cleanedBankAccountNumber);

      mutateAsync({ ...values, bankAccountNumber: cleanedBankAccountNumber });
    },
  });

  if (isLoading) {
    dispatch(setLoading(true));
  }

  if (isSuccess) {
    dispatch(setLoading(false));
  }

  return (
    <>
      <StyledDashboardVoluntaryMainContentFormsContainer
        onSubmit={formik.handleSubmit}>
        <StyledDashboardVoluntaryContent>
          <VoluntaryFormPart
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
          </VoluntaryFormPart>
          <VoluntaryFormPart
            fieldName="isDailyHelpActive"
            formik={formik}
            text="Codzienna pomoc">
            <Textarea
              label="Opis"
              value={formik.values.dailyHelpDescription}
              onChange={formik.handleChange}
              name="dailyHelpDescription"
            />
          </VoluntaryFormPart>
          <VoluntaryFormPart
            fieldName="isTakingDogsOutActive"
            formik={formik}
            text="Wyprowadzanie psów">
            <Textarea
              label="Opis"
              value={formik.values.takingDogsOutDescription}
              onChange={formik.handleChange}
              name="takingDogsOutDescription"
            />
          </VoluntaryFormPart>
        </StyledDashboardVoluntaryContent>
        <StyledDashboardFooter>
          <Button type="submit">Zapisz</Button>
        </StyledDashboardFooter>
      </StyledDashboardVoluntaryMainContentFormsContainer>
    </>
  );
};

export default VoluntaryForm;
