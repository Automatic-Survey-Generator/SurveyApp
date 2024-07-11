import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import { User } from '@/models'

const googleClientId = process.env.GOOGLE_ID;
const googleClientSecret = process.env.GOOGLE_SECRET;
const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;

if (!googleClientId || !googleClientSecret) {
    throw new Error('Missing Google OAuth environment variables');
}

if (!githubClientId || !githubClientSecret) {
    throw new Error('Missing GitHub OAuth environment variables');
}

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: githubClientId,
            clientSecret: githubClientSecret
        }),
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
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
