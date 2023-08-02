import {
  shelterRegister,
  login,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
} from "./authControllers/authControllers";
import {
  getShelterCards,
  getShelterCardsArchiveChartData,
  getShelterCardsArchiveChartDataForMonth,
  getShelterCardsArchiveChartDataForWeek,
  getShelterStats,
  getShelterVolunteering,
  updateShelterVolunteering,
} from "./petControllers/petControllers";

export const handlers = [
  login,
  shelterRegister,
  resetPasswordSendEmail,
  resetPasswordSetNewPassword,
  getShelterStats,
  getShelterCards,
  getShelterVolunteering,
  updateShelterVolunteering,
  getShelterCardsArchiveChartData,
  getShelterCardsArchiveChartDataForMonth,
  getShelterCardsArchiveChartDataForWeek,
];
