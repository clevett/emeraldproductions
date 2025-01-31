import { auth } from "@/auth";
import { getUserByEmail } from "@/db";

export const verifyAdminPrivileges = async () => {
  const session = await auth();
  const email = session?.user?.email;

  if (!email) return false;

  const user = await getUserByEmail(email);
  return user.isAdmin;
};
