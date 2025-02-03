import { User } from "@/types";

export const getUserByEmail = async (email: string) => {
  const response = await fetch(`${process.env.URL}/api/login?email=${email}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });

  const { data }: { data: User } = await response.json();
  return data;
};
