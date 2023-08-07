import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { removeToast } from "redux/toastSlice";
import { getColor } from "utils/styles/getStyle/getColor";

interface ToastProps {
  type: "success" | "error";
  index?: number;
}

const ToastContainer = styled.div<ToastProps>`
  position: fixed;
  top: ${({ index }) => (index ? `${index * 32}px` : 0)};
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 500;

  ${(props) =>
    props.type === "success" &&
    css`
      background-color: ${getColor("success")};
      color: #fff;
    `}

  ${(props) =>
    props.type === "error" &&
    css`
      background-color: ${getColor("error")};
      color: #fff;
    `}
`;

const Toast: React.FC = () => {
  const toasts = useSelector((state: RootState) => state.toasts);

  return (
    <>
      {toasts.map((toast, index) => (
        <ToastContainer
          key={toast.id}
          index={index}
          type={toast.type}>
          {toast.message}
        </ToastContainer>
      ))}
    </>
  );
};

export default Toast;
