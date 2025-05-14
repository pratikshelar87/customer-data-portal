const { handler } = require("../src/get-customers");
const fs = require("fs");
const path = require("path");

const mockData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../src/data/customers.json"), "utf-8")
);

describe("get-customers Lambda", () => {
  test("returns paginated customer data", async () => {
    const event = {
      queryStringParameters: { page: "1", limit: "5" },
    };

    const response = await handler(event);

    expect(response.statusCode).toBe(200);

    const body = JSON.parse(response.body);
    expect(body.customers.length).toBeLessThanOrEqual(5);
    expect(body.page).toBe(1);
    expect(body.totalPages).toBe(Math.ceil(mockData.length / 5));
  });

  test("returns 400 for invalid page and limit", async () => {
    const event = {
      queryStringParameters: { page: "-1", limit: "abc" },
    };
  
    const response = await handler(event);
  
    expect(response.statusCode).toBe(400);
    const body = JSON.parse(response.body);
    expect(body.message).toMatch(/Invalid query parameters/i);
  });
});
