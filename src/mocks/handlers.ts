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
  getShelterCardsCard,
  getShelterStats,
  getShelterVolunteering,
  postShelterCardsCat,
  updateShelterVolunteering,
} from "./petControllers/petControllers";
import {
  addWorker,
  deleteWorker,
  getWorkers,
} from "./shelterControllers/shelterControllers";
import { postStoragePicture } from "./storageControllers/storageControllers";
import { getUser, patchNewPassword } from "./userControllers/userControllers";

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
  getShelterCardsCard,
  postStoragePicture,
  postShelterCardsCat,
  getUser,
  patchNewPassword,
  getWorkers,
  addWorker,
  deleteWorker,
];
