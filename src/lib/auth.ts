// named imports
import { ADD_USER } from "@/graphql/mutations"

// default imports
import GoogleProvider from "next-auth/providers/google"

const API_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_CLIENT_URI || 'http://localhost:3000/api/graphql'
if (!API_ENDPOINT) throw new Error(`Env variable NEXT_PUBLIC_GRAPHQL_CLIENT_URI is required`)

export const authOptions = {
  // providers are the different ways a user can authenticate
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  
  // callbacks run after the user has been authenticated by a provider
  callbacks: {
    // @ts-ignore
    async signIn({ user, account }) {

      if (account.provider === "google") {
        const { email, name, image } = user

        // adding user to the database
        try {
          var data = await fetch(API_ENDPOINT, {
            method: "POST",
            body: JSON.stringify({
              query: ADD_USER,
              variables: {
                name: name,
                email: email,
                image: image,
              },
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json())
          return {data}
        }
        catch (error) {
          console.error(error)
        }
      }
      return user
    },
  },
}
