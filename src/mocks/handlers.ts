import {
  shelterRegister,
  login,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
} from "./authControllers/authControllers";

export const handlers = [
  login,
  shelterRegister,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
];
