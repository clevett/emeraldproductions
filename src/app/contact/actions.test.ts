/**
 * @jest-environment node
 */
import nodemailer from "nodemailer";
import { sendContactMessage } from "./actions";
import { initialContactState } from "./contact-state";

jest.mock("nodemailer", () => ({
  __esModule: true,
  default: { createTransport: jest.fn() },
}));

const originalEnv = process.env;
const sendMail = jest.fn();

function form() {
  const data = new FormData();
  data.set("name", "Example Person");
  data.set("email", "sender@example.com");
  data.set("message", "Hello there");
  data.set("website", "");
  return data;
}

beforeEach(() => {
  process.env = {
    ...originalEnv,
    SMTP_HOST: "smtp.example.com",
    SMTP_PORT: "587",
    SMTP_USER: "user",
    SMTP_PASSWORD: "password",
    CONTACT_FROM: "sender@example.com",
    CONTACT_TO: "recipient@example.com",
  };
  sendMail.mockReset();
  jest.mocked(nodemailer.createTransport).mockReturnValue({ sendMail } as never);
});

afterEach(() => {
  process.env = originalEnv;
  jest.restoreAllMocks();
});

test("sends a validated message with the visitor as reply-to", async () => {
  sendMail.mockResolvedValue({ accepted: ["recipient@example.com"] });
  const result = await sendContactMessage(initialContactState, form());
  expect(result.status).toBe("success");
  expect(nodemailer.createTransport).toHaveBeenCalledWith(
    expect.objectContaining({ port: 587, secure: false, requireTLS: true })
  );
  expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({
    from: "sender@example.com",
    to: "recipient@example.com",
    replyTo: "sender@example.com",
    text: expect.stringContaining("Hello there"),
  }));
});

test.each([
  ["email", "invalid"],
  ["email", "sender@example.com\nBcc: other@example.com"],
  ["name", "A".repeat(101)],
  ["message", " ".repeat(2)],
  ["message", "A".repeat(5001)],
  ["website", "spam"],
])("rejects invalid %s without sending", async (field, value) => {
  const data = form();
  data.set(field, value);
  expect((await sendContactMessage(initialContactState, data)).status).toBe("error");
  expect(sendMail).not.toHaveBeenCalled();
});

test("reports missing configuration", async () => {
  delete process.env.SMTP_HOST;
  jest.spyOn(console, "error").mockImplementation(() => {});
  expect((await sendContactMessage(initialContactState, form())).status).toBe("error");
  expect(sendMail).not.toHaveBeenCalled();
});

test("reports SMTP failures and rejected recipients", async () => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  sendMail.mockRejectedValueOnce(new Error("network failure"));
  sendMail.mockResolvedValueOnce({ accepted: [] });
  expect((await sendContactMessage(initialContactState, form())).status).toBe("error");
  expect((await sendContactMessage(initialContactState, form())).status).toBe("error");
});
