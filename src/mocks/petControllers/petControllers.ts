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
  "/shelters/cards/petListInShelter",
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
  "/shelters/volunteering",
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

const generateRandomNumberArray = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10000));
};

export const getShelterCardsArchiveChartData = rest.get(
  "/Pets/shelters/cards/archive/chart/year",
  async (req, res, ctx) => {
    try {
      const chartData = generateRandomNumberArray(12);

      return res(ctx.status(200), ctx.json(chartData));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

const getDaysInMonth = (year: number, month: number) => {
  const lastDayOfPreviousMonth = new Date(year, month, 0);

  return lastDayOfPreviousMonth.getDate();
};

export const getShelterCardsArchiveChartDataForMonth = rest.get(
  "/Pets/shelters/cards/archive/chart/month",
  async (req, res, ctx) => {
    try {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      const daysInMonth = getDaysInMonth(currentYear, currentMonth);
      const chartData = Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
      );

      return res(ctx.status(200), ctx.json(chartData));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

export const getShelterCardsArchiveChartDataForWeek = rest.get(
  "/Pets/shelters/cards/archive/chart/week",
  async (req, res, ctx) => {
    try {
      const currentDate = new Date();
      const currentDayOfWeek = currentDate.getDay();

      const chartData = Array.from({ length: 7 }, (_, index) => {
        const dayOfWeek = (currentDayOfWeek + index) % 7;
        return dayOfWeek + 1;
      });

      return res(ctx.status(200), ctx.json(chartData));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

const dummyObj = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  petIdentifier: "ABC123",
  name: "TEST1",
  type: "Cat",
  gender: "Male",
  breed: "Persian",
  color: "White",
  weight: 5.2,
  profilePhoto:
    "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
  photos: [
    "https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*",
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  ],
  age: 2,
  createdAt: "2023-07-31T21:46:59.855Z",
  isSterilized: true,
  isVisible: true,
  description: "Animal is a lovely Persian cat looking for a forever home.",
};

export const getShelterCardsCard = rest.get(
  "/shelters/cards/3fa85f64-5717-4562-b3fc-2c963f66afa6",
  async (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(dummyObj));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);


export const postShelterCardsCat = rest.post(
  "Pet/shelters/cards/cat",
  async (req, res, ctx) => {
    try {
      const body = await req.json();
      return res(
        ctx.status(200),
        ctx.json({ message: "Kot został dodany.", body })
      );
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);