"use server";

import { signIn } from "@/auth";

export async function socialLogin(formData: {
  get: (name: string) => FormDataEntryValue | null;
}) {
  const action = formData.get("action");
  if (action && typeof action === "string") {
    await signIn(action, { redirectTo: "/login" });
  } else {
    throw new Error("Action is required");
  }
}
