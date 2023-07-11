import React, { useEffect } from "react";
import Input from "../SharedComponents/Inputs/Input";
import Flex from "components/SharedComponents/Flex/Flex";
import * as Yup from "yup";
import { useFormik } from "formik";
import { handleCurrentStepProps } from "./RegisterForm";
import Button from "components/SharedComponents/Button/Button";
import { ArrowRightIcon } from "components/SharedComponents/icons/icons";
import { Form } from "./styles";

const RegisterStep1Form = ({
  handleCurrentStep,
  handleFormValues,
  formValues,
}: handleCurrentStepProps) => {
  const formik = useFormik({
    initialValues: {
      fullOrgName: "",
      street: "",
      postalCode: "",
      city: "",
      NIP: "",
      KRS: "",
    },
    validationSchema: Yup.object().shape({
      fullOrgName: Yup.string().required(
        'Pole "Pełna Nazwa Organizacji" jest wymagane'
      ),
      street: Yup.string().required('Pole "Ulica" jest wymagane'),
      postalCode: Yup.string()
        .matches(/^\d{2}-\d{3}$/, "Kod pocztowy powinien być w formacie XX-XXX")
        .required('Pole "Kod pocztowy" jest wymagane'),
      city: Yup.string().required('Pole "Miasto" jest wymagane'),
      NIP: Yup.string().required('Pole "Numer NIP" jest wymagane'),
      KRS: Yup.string().required('Pole "Numer KRS" jest wymagane'),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleFormValues(values);
      handleCurrentStep(2);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        mt="50px"
        width="100%"
        flexDirection="column"
        gap="16px">
        <Input
          label="Pełna Nazwa Organizacji"
          type="text"
          id="fullOrgName"
          name="fullOrgName"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.fullOrgName && formik.errors.fullOrgName
              ? formik.errors.fullOrgName
              : null
          }
        />
        <Input
          label="Ulica"
          type="text"
          id="street"
          name="street"
          placeholder="Wpisz"
          inputSize="Large"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.street && formik.errors.street
              ? formik.errors.street
              : null
          }
        />
        <Flex gap="16px">
          <Input
            width={"200px"}
            label="Kod pocztowy"
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Wpisz"
            inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && formik.errors.postalCode
                ? formik.errors.postalCode
                : null
            }
          />
          <Input
            label="Miasto"
            type="text"
            id="city"
            name="city"
            placeholder="Wpisz"
            inputSize="Large"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : null
            }
          />
        </Flex>
        <Input
          label="Numer NIP"
          type="text"
          id="NIP"
          name="NIP"
          placeholder="Wpisz"
          inputSize="Large"
          maxLength={16}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.NIP && formik.errors.NIP ? formik.errors.NIP : null
          }
        />
        <Input
          label="Numer KRS"
          type="number"
          id="KRS"
          name="KRS"
          placeholder="Wpisz"
          inputSize="XLarge"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.KRS && formik.errors.KRS ? formik.errors.KRS : null
          }
        />
      </Flex>
      <Button
        icon={<ArrowRightIcon fill="#fff" />}
        iconSpacing="8px"
        iconPlace="right"
        size="XLarge"
        mt="32px"
        width="100%"
        variant="fill"
        type="submit">
        Następny krok
      </Button>
    </form>
  );
};

export default RegisterStep1Form;
