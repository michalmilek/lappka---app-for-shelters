import { rest, RestRequest, ResponseResolver } from "msw";
import { setupServer } from "msw/node";

interface LoginRequestBody extends RestRequest {
  email: string;
  password: string;
}

interface LoginResponseBody {
  accessToken: string;
  refreshToken: string;
}

export const handlers = [
  rest.post<LoginRequestBody>(
    "/login",
    (req: RestRequest<LoginRequestBody>, res, ctx) => {
      const { email, password } = req.body;

      if (email === "test@test.com" && password === "test123") {
        const responseBody: LoginResponseBody = {
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
    }
  ),
];
