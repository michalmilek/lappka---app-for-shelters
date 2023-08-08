import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: ${getColor("lightGray3")};
  padding: 100px;
  border-radius: 8px;
`;

const CustomLoader = styled.div`
  border: 4px solid ${getColor("darkGray3")};
  border-top: 4px solid ${getColor("primary500")};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${loadingAnimation} 1s linear infinite;
`;

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading)
    return (
      <ModalBackdrop>
        <ModalContent>
          <CustomLoader />
        </ModalContent>
      </ModalBackdrop>
    );

  return null;
};

export default Loader;
