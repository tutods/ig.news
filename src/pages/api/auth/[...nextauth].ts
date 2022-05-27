import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { envConfig } from "config/env.config";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: envConfig.auth.github.id,
      clientSecret: envConfig.auth.github.secret,
      authorization: { params: { scope: "read:user" } },
    }),
  ],
  secret: envConfig.auth.secret,
});