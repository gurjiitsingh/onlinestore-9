//import NextAuth from "next-auth";
import { verifyPassword } from "@/lib/auth";
import { db } from "@/db";
import { user } from "@/db/schema";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

import NextAuth from "next-auth/next";
import { sql } from "drizzle-orm";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
       
      },
      async authorize(credentials: any, req): Promise<any> {
        const { email, password } = credentials;
       // console.log(" email, password",  email, password)
        const User = await db.select().from(user).where(sql`${user.email} = ${email}`);
        const current_user = User[0];
        console.log("-----------------inside NextAuth -----------------");

        
        //console.log(current_user.id);
        if (!current_user) {
          throw new Error("No user found!");
          return null;
        }

        const isVaildPass = await verifyPassword(
          password,
          current_user.password
        );

        if (!isVaildPass) {
          throw new Error("Wrong Credentials");
          return null;
        }
        //  const cookieStore = cookies()

        // cookies().set({
        //   name: 'userId',
        //   value: current_user[0].id,
        //   httpOnly: true,

        //   //path: '/',
        // })

        const user1 = {
          id: current_user.id,
          name: current_user.username,
          role: current_user.role,
          email: current_user.email,
        };

        return user1;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }:any) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    
    async jwt({ token, user, session }:any) {
     // call stack 1
      // you can get user values from databas directly here
      if (user) {
       // User is available during sign-in
       // can take value from user to assing to token
        return {
          id: user.id,
          name: user.name,
          role: user.role,
          email: user.email,
          picture: user.image,
        };
      }
      return token;
    },
    async session({ session, token }:any) {
      // call stack 2
     //token pocess all values, assign value to session
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      session.user.image = token.picture;
      
      return session;
    },
  },
});

export { handler as GET, handler as POST };

// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [

//   ],
// }
// export default NextAuth(authOptions)
