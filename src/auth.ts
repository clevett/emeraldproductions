import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { fetchUserByEmail } from "@/db";

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
        const data = await fetchUserByEmail(user.email);

        if (!data) {
          return token;
        }

        if (data && !data.id) {
          const create = await fetch(`${process.env.URL}/api/register`, {
            body: JSON.stringify({ user }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });

          const dbUser = await create.json();

          return { ...token, user: dbUser.data };
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
