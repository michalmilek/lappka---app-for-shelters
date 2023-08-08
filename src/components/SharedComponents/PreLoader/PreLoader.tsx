import React from "react";
import styled, { keyframes } from "styled-components";
import PreLoaderImage from "./PreLoaderImage.png";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

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
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const LoaderImage = styled.img`
  animation: ${pulseAnimation} 2s infinite;
`;

const PreLoaderModal = () => {
  return (
    <ModalOverlay>
      <ModalContent>
        <LoaderImage
          src={PreLoaderImage}
          alt="preloader"
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default PreLoaderModal;
