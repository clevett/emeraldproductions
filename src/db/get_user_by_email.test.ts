/**
 * @jest-environment node
 */
import { getUserByEmail } from "./get_user_by_email";

afterEach(() => jest.restoreAllMocks());

test("reports a failed lookup instead of parsing a failed response", async () => {
  const response = new Response(null, { status: 500 });
  const json = jest.spyOn(response, "json");
  const fetchMock = jest.spyOn(global, "fetch").mockResolvedValue(response);

  await expect(getUserByEmail("test+tag@example.com")).rejects.toThrow(
    "User lookup failed (HTTP 500); check server logs"
  );
  expect(fetchMock).toHaveBeenCalledWith(
    expect.stringContaining("email=test%2Btag%40example.com"),
    expect.anything()
  );
  expect(json).not.toHaveBeenCalled();
});
