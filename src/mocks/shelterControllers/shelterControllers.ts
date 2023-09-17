import { rest } from "msw";

interface WorkerInterface {
  fullName: string;
  email: string;
  additionDate: string;
}

let workers: WorkerInterface[] = [
  {
    fullName: "TEST1",
    email: "test1@example.com",
    additionDate: "2023-09-17",
  },
  {
    fullName: "TEST2",
    email: "test2@example.com",
    additionDate: "2023-09-16",
  },
  {
    fullName: "TEST3",
    email: "test3@example.com",
    additionDate: "2023-09-14",
  },
  {
    fullName: "TEST4",
    email: "test4@example.com",
    additionDate: "2023-09-12",
  },
];

export const getWorkers = rest.get(
  "/Management/workers",
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(workers));
  }
);

export const addWorker = rest.post(
  "/Management/addWorker",
  async (req, res, ctx) => {
    const { email } = await req.json();

    if (workers.some((worker) => worker.email === email)) {
      return res(
        ctx.status(400),
        ctx.json({
          message: "Adres e-mail już istnieje w bazie danych.",
          code: "invalid_email",
        })
      );
    }

    return res(
      ctx.status(201),
      ctx.json({
        message: `Link do rejestracji został wysłany na adres: ${email}`,
      })
    );
  }
);

export const deleteWorker = rest.delete(
  "/Management/deleteWorker/:email",
  async (req, res, ctx) => {
    const emailToDelete = req.params.email;

    const index = workers.findIndex((worker) => worker.email === emailToDelete);

    if (index !== -1) {
      workers.splice(index, 1);
      return res(
        ctx.status(200),
        ctx.json({
          message: `Pracownik o emailu ${emailToDelete} został usunięty.`,
        })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          message: "Nie znaleziono pracownika o podanym adresie email.",
        })
      );
    }
  }
);
