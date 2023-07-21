import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { removeToast } from "redux/toastSlice";
import { getColor } from "utils/styles/getStyle/getColor";

interface ToastProps {
  type: "success" | "error";
}

const ToastContainer = styled.div<ToastProps>`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toasts);

  useEffect(() => {
    const toastTimer = setInterval(() => {
      if (toasts.length > 0) {
        dispatch(removeToast(toasts[0].id));
      }
    }, 3000);

    return () => {
      clearInterval(toastTimer);
    };
  }, [toasts, dispatch]);

  return (
    <>
      {toasts.map((toast) => (
        <ToastContainer
          key={toast.id}
          type={toast.type}>
          {toast.message}
        </ToastContainer>
      ))}
    </>
  );
};

export default Toast;
