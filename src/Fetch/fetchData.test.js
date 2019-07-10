import { fetchData } from "./fetchData";

describe("fetchData", () => {
  let mockGET;
  let URL;
  let mockData

  beforeEach(() => {
    URL = "http://localhost:3000/api/v1/projects";
    mockGET = {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json"
      }
    };
    mockData = [
        { name: "A test" },
        { name: "Another test"
        }
      ];
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mockData)
        })
      );
    });


  it("should take an expected URL;", async () => {
    await fetchData(URL);
    expect(fetch).toHaveBeenCalledWith(URL);
  });

  it("should return expected data", async () => {
    const result = await fetchData(URL, mockGET);
    expect(result).toEqual(mockData);
  });
  it("should throw an error if something goes wrong", async () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        status: 422,
        ok: false,
        json: jest.fn(() => Promise.resolve("Failed to get Projects"))
      })
    );
    const expected = new Error("Could not fetch projects");
    await expect(fetchData(URL, "projects")).rejects.toEqual(expected);
  });
});



