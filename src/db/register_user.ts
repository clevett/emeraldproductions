import { User as NextAuthUser } from "next-auth";
import { User } from "@/types";

export const registerUser = async (user: NextAuthUser) => {
  const create = await fetch(`${process.env.URL}/api/register`, {
    body: JSON.stringify({ user }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  const dbUser: { data: User } = await create.json();
  return dbUser.data;
};
