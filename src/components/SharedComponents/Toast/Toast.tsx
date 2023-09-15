import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { removeToast } from "redux/toastSlice";
import { getColor } from "utils/styles/getStyle/getColor";
import {
  ToastContainer,
  ToastContent,
  Message,
  MessageText,
  ToastClose,
  ProgressBar,
} from "./Toast.styled";
import useToastUtils from "./useToastUtils";

const Toast: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const toasts = useSelector((state: RootState) => state.toasts);

  const { getMessage } = useToastUtils();

  const handleCloseToast = (id: string) => {
    dispatch(removeToast(id));
  };

  return (
    <>
      {toasts.map((toast, index) => (
        <ToastContainer
          toastType={toast.type}
          key={toast.id}
          index={index}>
          <ToastContent>
            <Message>
              <MessageText className="text-1">
                {getMessage(toast.type)}
              </MessageText>
              <MessageText className="text-2">{toast.message}</MessageText>
            </Message>
          </ToastContent>
          <ToastClose onClick={() => handleCloseToast(toast.id)}>
            <XMarkIcon
              height={20}
              color={getColor("darkGray2")}
            />
          </ToastClose>
          <ProgressBar toastType={toast.type} />
        </ToastContainer>
      ))}
    </>
  );
};

export default Toast;
