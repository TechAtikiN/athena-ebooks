
// default imports
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ user, account }) {
      if (account.provider === "google") {
        // extract user data
        const { email, name, image } = user
        
        try {
          // send user data to backend
          const res = await fetch(`${process.env.BACKEND_API}/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, name, image })
          })

          if (res.status === 201) return user
        } catch (error) {
          console.error(error)
        }
      }
      return user
    }
  }
}