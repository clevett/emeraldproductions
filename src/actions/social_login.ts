"use server";

import { signIn } from "@/auth";

export async function socialLogin(formData: {
  get: (name: string) => string | null;
}) {
  const action = formData.get("action");
  //@ts-expect-error ignore action error for now
  await signIn(action, { redirectTo: "/admin" });
}
