import Button from "components/SharedComponents/Button/Button";
import Typography from "components/SharedComponents/Typography/Typography";
import React, { useEffect } from "react";
import styled from "styled-components";
import LappkaLogo from "components/AdminDashboardComponents/LappkaLogo.png";
import { getColor } from "utils/styles/getStyle/getColor";
import { useDeleteUser } from "services/user/userServices";
import { useDispatch } from "react-redux";
import { setLoading } from "redux/loadingSlice";
import { useNavigate } from "react-router-dom";
import toastService from "singletons/toastService";

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

const ModalBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AccountSettingsDeleteUser = ({ isOpen, onClose }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate, isSuccess, isLoading, isError, error } = useDeleteUser();

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [isLoading, dispatch]);

  useEffect(() => {
    if (isSuccess) {
      toastService.showToast("Użytkownik został usunięty pomyślnie", "success");
      onClose();
      navigate("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  }, [isSuccess, onClose, navigate]);

  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalLogo
          src={LappkaLogo}
          alt="Logo"
        />
        <Typography
          variant="Heading 18 Semi Bold"
          color="darkGray2"
          tag="h2">
          Czy na pewno chcesz usunąć użytkownika?
        </Typography>
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
            type="button"
            onClick={() => mutate()}>
            Usuń użytkownika
          </Button>
        </ModalBtnsContainer>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default AccountSettingsDeleteUser;
