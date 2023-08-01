import { dummyDataNewestAnimals } from "components/AdminDashboardComponents/DashboardComponents/DashboardNewestAnimalCards/dummyData";
import { rest } from "msw";

const sheltersStats = {
  cardCount: 5,
  toAdoptCount: 4,
  volunteerCount: 3,
  adoptedCount: 2,
};

export const getShelterStats = rest.get(
  "/Pet/shelters/stats",
  async (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(sheltersStats));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);



export const getShelterCards = rest.get(
  "/Pet/shelters/cards",
  async (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(dummyDataNewestAnimals));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

const dummyDonationData = {
  isDonationActive: true,
  bankAccountNumber: "0000-0000-0000-0000",
  donationDescription: "Donate to support our shelter animals!",
  isDailyHelpActive: true,
  dailyHelpDescription: "We appreciate any daily help for our lovely pets!",
  isTakingDogsOutActive: true,
  takingDogsOutDescription: "Take our dogs out for a walk and make them happy!",
};

export const getShelterVolunteering = rest.get(
  "/Pet/shelters/volunteering/123",
  async (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(dummyDonationData));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

export const updateShelterVolunteering = rest.put(
  "/Pet/shelters/volunteering",
  async (req, res, ctx) => {
    try {
      const updatedData = await req.json();

      return res(ctx.status(200), ctx.json(updatedData));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);