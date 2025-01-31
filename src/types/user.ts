export type { User as NextAuthUser } from "next-auth";

export type User = {
  _id: string;
  email: string;
  id: string;
  image: string;
  isAdmin: boolean;
  name: string;
};
