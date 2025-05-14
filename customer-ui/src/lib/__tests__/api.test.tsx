import { fetchCustomers } from "../api";

global.fetch = vi.fn();

describe("fetchCustomers", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    process.env.API_KEY = "test-key";
  });

  it("fetches customers with correct URL and headers", async () => {
    const mockResponse = {
      customers: [{ id: 1, fullName: "John Doe", email: "john@example.com", registrationDate: "2024-01-01" }],
      totalPages: 3,
    };

    (fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchCustomers(1, 10);

    expect(fetch).toHaveBeenCalledWith(
      "https://qhxx3y3229.execute-api.ap-southeast-2.amazonaws.com/prod/customers?page=1&limit=10",
      expect.objectContaining({
        headers: expect.objectContaining({
          "x-api-key": expect.any(String),
        }),
      })
    );

    expect(result.customers[0].fullName).toBe("John Doe");
    expect(result.totalPages).toBe(3);
  });

  it("throws if fetch fails", async () => {
    (fetch as any).mockResolvedValueOnce({ ok: false });

    await expect(fetchCustomers(1, 10)).rejects.toThrow("Failed to fetch customers");
  });
});
