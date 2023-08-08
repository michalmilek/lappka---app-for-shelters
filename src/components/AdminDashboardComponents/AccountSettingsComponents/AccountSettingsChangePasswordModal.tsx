import Button from "components/SharedComponents/Button/Button";
import Input from "components/SharedComponents/Inputs/Input";
import Typography from "components/SharedComponents/Typography/Typography";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import LappkaLogo from "components/AdminDashboardComponents/LappkaLogo.png";
import { getColor } from "utils/styles/getStyle/getColor";
import { usePatchUserNewPassword } from "services/user/userServices";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import useToast from "hooks/useToast";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const ModalContainer = styled.div`
  background-color: ${getColor("white")};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  min-width: 550px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ModalLogo = styled.img`
  height: 100%;
  width: 120px;
  object-fit: cover;
`;

const ModalForm = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const ModalBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Stare hasło jest wymagane"),
  newPassword: Yup.string()
    .min(6, "Nowe hasło musi mieć co najmniej 6 znaków")
    .required("Nowe hasło jest wymagane"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), undefined], "Hasła muszą się zgadzać")
    .required("Potwierdź nowe hasło jest wymagane"),
});

const AccountSettingsChangePasswordModal = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const { mutate, isSuccess, isLoading } = usePatchUserNewPassword();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      mutate(values);
      /*       if (isSuccess) {
        showToast("Hasło zostało zmienione pomyślnie", "success");
        onClose();
      } */
      console.log("flaga", isSuccess);
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      showToast("Hasło zostało zmienione pomyślnie", "success");
      onClose();
    }
  }, [isSuccess, showToast, onClose]);

  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalLogo
          src={LappkaLogo}
          alt="Logo"
        />
        <Typography
          variant="Heading 24 Semi Bold"
          color="darkGray2"
          tag="h2">
          Zmiana hasła
        </Typography>
        <ModalForm onSubmit={formik.handleSubmit}>
          <Input
            inputSize="Large"
            label="Stare hasło:"
            type="password"
            placeholder="Stare hasło"
            id="currentPassword"
            name="currentPassword"
            onChange={formik.handleChange}
            value={formik.values.currentPassword}
            error={
              formik.errors.currentPassword && formik.touched.currentPassword
                ? formik.errors.currentPassword
                : null
            }
          />
          <Input
            inputSize="Large"
            label="Nowe hasło:"
            type="password"
            placeholder="Nowe hasło"
            id="newPassword"
            name="newPassword"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            error={
              formik.errors.newPassword && formik.touched.newPassword
                ? formik.errors.newPassword
                : null
            }
          />
          <Input
            inputSize="Large"
            label="Potwierź nowe hasło:"
            type="password"
            placeholder="Potwierdź nowe hasło"
            id="confirmNewPassword"
            name="confirmNewPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
            error={
              formik.errors.confirmNewPassword &&
              formik.touched.confirmNewPassword
                ? formik.errors.confirmNewPassword
                : null
            }
          />
          <ModalBtnsContainer>
            <Button
              isFullWidth
              size="Large"
              variant="outline"
              type="button"
              onClick={onClose}>
              Anuluj
            </Button>
            <Button
              isFullWidth
              size="Large"
              variant="fill"
              type="submit">
              Zmień hasło
            </Button>
          </ModalBtnsContainer>
        </ModalForm>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default AccountSettingsChangePasswordModal;
