import request from "supertest";

import app from "./index.js";

// test/mirrorで送られたとき、元のリクエストをエコーされることの確認
describe("POST /test/mirror", () => {
  it("responds with the request", async () => {
    const response = await request(app)
      .post("/test/mirror")
      .send({ message: "Hello World!" })
      .expect(200);

    await expect(response.text).toMatch(/POST \/test\/mirror HTTP\/1.1/);
    await expect(response.text).toMatch(/content-type: application\/json/);
    await expect(response.text).toMatch(/{"message":"Hello World!"}/);
  });
});

// それ以外(例: test/file.txt)の場合、ファイルが返されることの確認
describe("GET /test/file.txt", () => {
  it("responds with the file", async () => {
    const response = await request(app).get("/test/file.txt").expect(200);

    await expect(response.text).toBe("i'm file thank you!!");
  });
});
