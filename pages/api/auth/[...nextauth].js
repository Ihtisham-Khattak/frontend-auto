import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const NextAuth = {
  providers: [
    (secret = process.env.JWT_SECRET),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
export default NextAuth;
