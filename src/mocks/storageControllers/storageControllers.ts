import { rest } from "msw";

const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

export const postStoragePicture = rest.post(
  "/Storage",
  async (req, res, ctx) => {
    try {
      const body = await req.json();
      const formData = new URLSearchParams(body);
      const files = formData.getAll("file");

      if (files.length === 0) {
        return res(
          ctx.status(400),
          ctx.json({ message: "Files not found in request." })
        );
      }

      const urls = [];

      for (const file of files) {
        if (file.length > MAX_FILE_SIZE) {
          return res(
            ctx.status(400),
            ctx.json({ message: "File size exceeds the limit (5MB)." })
          );
        }

        const randomImageUrl = `img`;
        urls.push(randomImageUrl);
      }

      return res(ctx.status(200), ctx.json({ urls }));
    } catch (error) {
      console.error(error);
      return res(ctx.status(500), ctx.json({ message: "Server error" }));
    }
  }
);

export const getStoragePicture = rest.get("/Storage", async (req, res, ctx) => {
  try {
    const ids = req.url.searchParams.getAll("ids[0]");

    if (!ids || ids.length === 0) {
      return res(
        ctx.status(400),
        ctx.json({ message: "Ids not found in request." })
      );
    }

    return res(ctx.status(200), ctx.json(ids));
  } catch (error) {
    console.error(error);
    return res(ctx.status(500), ctx.json({ message: "Server error" }));
  }
});

