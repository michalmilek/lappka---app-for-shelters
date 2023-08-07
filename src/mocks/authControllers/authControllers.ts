import { LoginRequest } from "services/auth/auth";
import { rest } from "msw";

export const login = rest.post("/Auth/loginWeb", async (req, res, ctx) => {
  const { email, password } = (await req.json()) as LoginRequest;

  if (email === "test@test.com" && password === "test123") {
    const responseBody = {
      accessToken: "token",
      refreshToken: "refresh_token",
    };
    return res(ctx.status(200), ctx.json(responseBody));
  } else if (email === "forbidden@example.com") {
    return res(ctx.status(403));
  } else if (email === "badrequest@example.com") {
    return res(ctx.status(400));
  } else {
    return res(ctx.status(500));
  }
});

export const shelterRegister = rest.post(
  "/Auth/shelterRegister",
  (req, res, ctx) => {
    return res(ctx.status(204));
  }
);

export const resetPasswordSendEmail = rest.post(
  "/Auth/resetPassword",
  async (req, res, ctx) => {
    const { email } = await req.json();
    try {
      if (email === "test@test.com") return res(ctx.status(204));
      if (!email) {
        return res(
          ctx.status(400),
          ctx.json({ message: "Bad request", yourRequest: email })
        );
      }
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

export const resetPasswordSetNewPassword = rest.post(
  "/Auth/setNewPassword",
  async (req, res, ctx) => {
    const { password, confirmPassword } = await req.json();
    try {
      if (password !== confirmPassword) {
        return res(
          ctx.status(400),
          ctx.json({ message: "Passwords do not match" })
        );
      }
      return res(ctx.status(200), ctx.json({ message: "Password updated" }));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);
