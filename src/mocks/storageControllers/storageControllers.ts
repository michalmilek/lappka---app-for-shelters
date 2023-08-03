import { rest } from "msw";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const postStoragePicture = rest.post(
  "/Storage/picture",
  async (req, res, ctx) => {
    try {
      const body = await req.text();
      const formData = new URLSearchParams(body);
      const file = formData.get("file");

      if (!file) {
        return res(
          ctx.status(400),
          ctx.json({ message: "File not found in request." })
        );
      }

      if (file.length > MAX_FILE_SIZE) {
        return res(
          ctx.status(400),
          ctx.json({ message: "File size exceeds the limit (5MB)." })
        );
      }

      return res(
        ctx.status(200),
        ctx.json({
          url: "https://img.freepik.com/free-photo/beautiful-shot-white-british-shorthair-kitten_181624-57681.jpg?w=2000",
        })
      );
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);