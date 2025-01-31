import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
        const email = user.email;
        console.log("User is logged in");

        const response = await fetch(
          `${process.env.URL}/api/login?email=${email}`,

          {
            headers: { "Content-Type": "application/json" },
            method: "GET",
          }
        );

        const dbUser = await response.json();

        if (!dbUser.email) {
          const create = await fetch(`${process.env.URL}/api/register`, {
            body: JSON.stringify({ user }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          });

          const newUser = await create.json();

          console.log("NEW USER", newUser);

          return newUser;
        }

        console.log("JWT", dbUser);
        return dbUser;
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
