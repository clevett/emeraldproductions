import type { Metadata } from "next";
import { Heading } from "@/components";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "Contact | Emerald Productions" };

export default function ContactPage() {
  return (
    <div className="grid justify-items-center gap-6 p-4">
      <Heading as="h1">Contact</Heading>
      <p>Send me a message using the form below.</p>
      <ContactForm />
    </div>
  );
}
