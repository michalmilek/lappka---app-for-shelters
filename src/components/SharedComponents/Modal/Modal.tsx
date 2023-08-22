import React from "react";
import styled from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";
import LappkaLogo from "components/AdminDashboardComponents/LappkaLogo.png";

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

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ isOpen, children }) => {
  return isOpen ? (
    <ModalOverlay>
      <ModalContainer>
        <ModalLogo src={LappkaLogo} />
        {children}
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};

export default Modal;
