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
import { useUpdateShelterVolunteering } from "services/pet/petServices";
import { ShelterVolunteeringResponse } from "services/pet/petTypes";
import { t } from "i18next";

interface Props {
  data: ShelterVolunteeringResponse;
}

const validationSchema = Yup.object().shape({
  bankAccountNumber: Yup.string()
    .nullable()
    .matches(
      /^(?:\d{2}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}-\d{4}|\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d{4}|\d{26})$/,
      "Konto bankowe musi mieć 26 cyfer oraz może być oddzielone spacjami lub pauzami."
    )
    .test(
      "is-26-digits",
      "Konto musi mieć 26 cyfer.",
      (value?: string | null) => {
        if (!value) {
          return true;
        }
        const numbers = value.match(/\d/g);
        if (numbers && numbers.length === 26) {
          return true;
        } else {
          return false;
        }
      }
    ),
});

export type FormikType = FormikProps<ShelterVolunteeringResponse>;

const VoluntaryForm = ({ data }: Props) => {
  const { mutate: updateShelterVolunteeringFn } =
    useUpdateShelterVolunteering();

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    onSubmit: (values) => {
      const cleanedBankAccountNumber = values.bankAccountNumber.replace(
        /[\s-]/g,
        ""
      );

      updateShelterVolunteeringFn({
        ...values,
        bankAccountNumber: values.bankAccountNumber
          ? cleanedBankAccountNumber
          : values.bankAccountNumber,
      });
    },
  });

  return (
    <>
      <StyledDashboardVoluntaryMainContentFormsContainer
        onSubmit={formik.handleSubmit}>
        <StyledDashboardVoluntaryContent>
          <VoluntaryFormPart
            fieldName="isDonationActive"
            formik={formik}
            text={t("voluntary.makeADonation")}>
            <Input
              onBlur={formik.handleBlur}
              placeholder="0000-0000-0000-0000"
              inputSize="Large"
              label={t("voluntary.enterYourAccountNumber")}
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
              label={t("voluntary.description")}
              value={formik.values.donationDescription}
              onChange={formik.handleChange}
              name="donationDescription"
            />
          </VoluntaryFormPart>
          <VoluntaryFormPart
            fieldName="isDailyHelpActive"
            formik={formik}
            text={t("voluntary.dailyAssistance")}>
            <Textarea
              label={t("voluntary.description")}
              value={formik.values.dailyHelpDescription}
              onChange={formik.handleChange}
              name="dailyHelpDescription"
            />
          </VoluntaryFormPart>
          <VoluntaryFormPart
            fieldName="isTakingDogsOutActive"
            formik={formik}
            text={t("voluntary.walkingTheDogs")}>
            <Textarea
              label={t("voluntary.description")}
              value={formik.values.takingDogsOutDescription}
              onChange={formik.handleChange}
              name="takingDogsOutDescription"
            />
          </VoluntaryFormPart>
        </StyledDashboardVoluntaryContent>
        <StyledDashboardFooter>
          <Button type="submit">{t("buttons.save")}</Button>
        </StyledDashboardFooter>
      </StyledDashboardVoluntaryMainContentFormsContainer>
    </>
  );
};

export default VoluntaryForm;
