import { User as NextAuthUser } from "next-auth";
import { User } from "@/types";

export const registerUser = async (user: NextAuthUser) => {
  const create = await fetch(`${process.env.URL}/api/register`, {
    body: JSON.stringify({ user }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  if (!create.ok) {
    throw new Error(`User registration failed (HTTP ${create.status}); check server logs`);
  }
  const dbUser: { data: User } = await create.json();
  return dbUser.data;
};
