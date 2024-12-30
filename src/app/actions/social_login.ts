"use server";

import { signIn } from "@/auth";

export async function socialLogin(formData: { get: (arg0: string) => string }) {
  const action = formData.get("action");

  console.table({
    action,
  });

  await signIn(action, { redirectTo: "/login" });
}
