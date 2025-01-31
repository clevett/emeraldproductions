"use server";

import { signIn } from "@/auth";

export async function socialLogin(formData: {
  get: (name: string) => FormDataEntryValue | null;
}) {
  const action = formData.get("action");

  if (typeof action === "string") {
    await signIn(action, { redirectTo: "/login" });
  }
}
