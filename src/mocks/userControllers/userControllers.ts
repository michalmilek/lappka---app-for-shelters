import { rest } from "msw";
import { PatchUserNewPasswordRequest } from "services/user/user";

export const usersData = {
  id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  username: "sampleUser",
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  createdAt: new Date(),
  profilePicture: "https://naszywki24.pl/galerie/l/lapka-bialy-haft_2799.jpg",
  role: "Admin",
  loginProvider: "local",
};

export const getUser = rest.get("/User", async (req, res, ctx) => {
  try {
    return res(ctx.status(200), ctx.json(usersData));
  } catch (error) {
    console.error(error);
    return res(ctx.status(500), ctx.json({ message: "Server error" }));
  }
});

export const patchNewPassword = rest.patch(
  "/User/NewPassword",
  async (req, res, ctx) => {
    try {
      const { currentPassword, newPassword, confirmNewPassword } =
        (await req.json()) as PatchUserNewPasswordRequest;

      if (currentPassword === "test123") {
        if (newPassword === confirmNewPassword) {
          return res(
            ctx.status(200),
            ctx.json({ message: "Password changed successfully" })
          );
        } else {
          return res(
            ctx.status(400),
            ctx.json({ message: "New passwords do not match" })
          );
        }
      } else {
        return res(
          ctx.status(401),
          ctx.json({ message: "Current password is incorrect" })
        );
      }
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);
