import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import { User } from '@/models'

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            // @ts-ignore
            clientId: process.env.GITHUB_ID,
            // @ts-ignore
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            // @ts-ignore
            clientId: process.env.GOOGLE_ID,
            // @ts-ignore
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "Credentials",
            // @ts-ignore
            async authorize(credentials, req) {
                const existingUser = await User.findOne({ email: credentials?.email })
                if (!existingUser) {
                    throw new Error("No user Found with Email Please Sign Up...!")
                }
                const isValidPassword = await bcrypt.compare(credentials?.password, existingUser?.password)
                if (!isValidPassword) {
                    throw new Error("Invalid Credentials")
                }
                return existingUser
            },
            credentials: {
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                }
            }
        })
    ],
    callbacks: {
        // @ts-ignore
        async signIn({ user, account }) {
          if (account?.provider === "google" || account?.provider === "github") {
            const { email } = user;
            try {
              const userExists = await User.findOne({ email });
              if (!userExists) {
                const user = await new User({ email })
                user.save();
                  return user;
              }
            } catch (error) {
              console.error(error.message);
            }
          }
          return user;
        },
      },
    pages: {
        signIn: '/login'
    }
}
