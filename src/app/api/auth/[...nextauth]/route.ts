import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your own logic here to validate credentials
        // For this example, we'll just return a dummy user
        if (credentials?.email === "user@example.com" && credentials?.password === "password") {
          return { id: "1", name: "Test User", email: "user@example.com" }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/register',
  },
})

export { handler as GET, handler as POST }