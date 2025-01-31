import { auth } from "@/auth";
import { fetchUserByEmail } from "@/db";

export const verifyAdminPrivileges = async () => {
  const session = await auth();
  const email = session?.user?.email;

  if (!email) return false;

  const user = await fetchUserByEmail(email);
  return user.isAdmin;
};
