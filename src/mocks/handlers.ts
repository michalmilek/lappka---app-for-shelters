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
  putShelterCardsAnimal,
  updateShelterVolunteering,
} from "./petControllers/petControllers";
import {
  addWorker,
  deleteWorker,
  getShelterDetails,
  getWorkers,
} from "./shelterControllers/shelterControllers";
import {
  getStoragePicture,
  postStoragePicture,
} from "./storageControllers/storageControllers";
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
  getStoragePicture,
  getUser,
  patchNewPassword,
  getWorkers,
  addWorker,
  deleteWorker,
  getShelterDetails,
  putShelterCardsAnimal,
];
