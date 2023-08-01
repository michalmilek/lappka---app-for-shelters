import {
  shelterRegister,
  login,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
} from "./authControllers/authControllers";
import {
  getShelterCards,
  getShelterStats,
} from "./petControllers/petControllers";

export const handlers = [
  login,
  shelterRegister,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
  getShelterStats,
  getShelterCards,
];
