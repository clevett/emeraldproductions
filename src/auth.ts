import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { GET } from "./app/api/login/route";

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
      if (user) {
        // get user from db with the email
        // if there is no user with the email, create new user
        // else set the user data to token
        const dbUser = GET(user);
        console.log("DATABASE USER");
        console.log(dbUser);
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
