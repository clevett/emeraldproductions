import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { registerUser, getUserByEmail } from "@/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user && user.email) {
        const data = await getUserByEmail(user.email);

        if (!data) {
          return token;
        }

        if (data && !data.id) {
          const dbUser = registerUser(user);
          return { ...token, user: dbUser };
        }

        return { ...token, user: data };
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        // set the token data to session
      }

      return session;
    },

    redirect() {
      return "/login";
    },
  },
});
