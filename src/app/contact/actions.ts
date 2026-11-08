"use server";

import nodemailer from "nodemailer";
import type { ContactState } from "./contact-state";

export async function sendContactMessage(
  _previousState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const website = formData.get("website");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    typeof website !== "string" ||
    website !== "" ||
    !name.trim() ||
    name.length > 100 ||
    /[\r\n]/.test(name) ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message.trim() ||
    message.length > 5000
  ) {
    return { status: "error", message: "Please check your name, email, and message and try again." };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_FROM, CONTACT_TO } = process.env;
  const port = Number(SMTP_PORT);
  if (!SMTP_HOST || !SMTP_PORT || !Number.isInteger(port) || port < 1 || port > 65535 ||
      !SMTP_USER || !SMTP_PASSWORD || !CONTACT_FROM || !CONTACT_TO) {
    console.error("Contact form SMTP configuration is missing or invalid.");
    return { status: "error", message: "The contact form is temporarily unavailable. Please try again later." };
  }

  try {
    const transport = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      requireTLS: port !== 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });
    const result = await transport.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: "New website contact message",
      text: `Name: ${name.trim()}\nEmail: ${email}\n\n${message.trim()}`,
    });
    if (result.accepted.length === 0) {
      console.error("Contact form delivery was rejected by the mail server.");
      return { status: "error", message: "Your message could not be sent. Please try again later." };
    }
    return { status: "success", message: "Your message has been sent. Thank you!" };
  } catch (error) {
    console.error("Contact form delivery failed:", error instanceof Error ? error.name : "Unknown error");
    return { status: "error", message: "Your message could not be sent. Please try again later." };
  }
}
