import styled, { keyframes } from "styled-components";
import { getColor } from "utils/styles/getStyle/getColor";

const appearAnimation = keyframes`
  0% {
    transform: translateX(calc(100% + 30px));
  }
  100% {
    transform: translateX(0);
  }
`;

interface ToastContainerInterface extends React.ComponentProps<"div"> {
  index: number;
  toastType: "success" | "error";
}

export const ToastContainer = styled.div<ToastContainerInterface>`
  z-index: 2500;
  position: absolute;
  top: ${({ index }) => (index ? `${index * 60}px` : 0)};
  right: 10px;
  border-radius: 6px;
  background: #fff;
  padding: 15px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-left: 8px solid
    ${({ toastType }) =>
      toastType ? `${getColor(toastType)}` : getColor("darkGray2")};
  overflow: hidden;
  animation: ${appearAnimation} 0.5s cubic-bezier(0.68, -0.55, 0.25, 1.35);

  @media screen and (max-width: 600px) {
    width: 90%;
    right: 5px;
    padding: 15px 10px;
  }
`;

export const ToastContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageText = styled.span`
  font-size: 18px;
  font-weight: 600;

  &.text-1 {
    color: ${getColor("darkGray2")};
  }

  &.text-2 {
    color: ${getColor("darkGray1")};
    font-weight: 400;
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;

export const ToastClose = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 5px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const ProgressBar = styled.div<{ toastType: "success" | "error" }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: ${getColor("lightGray2")};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ toastType }) =>
      toastType ? `${getColor(toastType)}` : getColor("darkGray2")};
    animation: ${keyframes`
      100% {
        right: 100%;
      }
    `} 2.8s linear forwards;
  }
`;
