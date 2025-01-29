import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

//https://docs.kinde.com/developer-tools/sdks/frontend/react-sdk/

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
        //const dbUser = await GET(user);
        console.log("DATABASE USER");
        //console.log(dbUser);
      }

      console.log(user);

      // // 2. Prepare data for insertion into database
      // const { name, email, password } = validatedFields.data;
      // // e.g. Hash the user's password before storing it
      // const hashedPassword = await bcrypt.hash(password, 10);

      // // 3. Insert the user into the database or call an Auth Library's API
      // const data = await db
      //   .insert(users)
      //   .values({
      //     name,
      //     email,
      //     password: hashedPassword,
      //   })
      //   .returning({ id: users.id });

      // const user = data[0];

      // if (!user) {
      //   return {
      //     message: "An error occurred while creating your account.",
      //   };
      // }

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
