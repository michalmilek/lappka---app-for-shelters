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
