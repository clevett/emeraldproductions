import { User } from "@/types";

export const getUserByEmail = async (email: string) => {
  const response = await fetch(`${process.env.URL}/api/login?${new URLSearchParams({ email })}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`User lookup failed (HTTP ${response.status}); check server logs`);
  }

  const { data }: { data: User | undefined } = await response.json();
  return data;
};
