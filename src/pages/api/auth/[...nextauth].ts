import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';


const googleid = process.env.GOOGLE_CLIENT_ID
const googleSecret = process.env.GOOGLE_CLIENT_SECRET
const authorization = process.env.AUTHORIZATION
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleid&& googleid,
      clientSecret: googleSecret && googleSecret,
      // authorization: authorization&& authorization
    }),
    // GithubProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    
  ],
  callbacks: {
    async jwt({ token, account } ){
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      return session
    }
  }
};
export default NextAuth(authOptions)