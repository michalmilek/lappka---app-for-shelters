import { LoginRequest } from "apiCalls/auth/auth";
import { rest } from "msw";

const login = rest.post("/Auth/loginWeb", async (req, res, ctx) => {
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

const shelterRegister = rest.post("/Auth/shelterRegister", (req, res, ctx) => {
  return res(ctx.status(204));
});

export const handlers = [login, shelterRegister];
