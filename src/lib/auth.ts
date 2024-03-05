// named imports
import { ADD_USER } from "@/graphql/queries"

// default imports
import GoogleProvider from "next-auth/providers/google"

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
          var data = await fetch("http://localhost:3000/api/graphql", {
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
          console.log(data)
          return {data}
        }
        catch (error) {
          console.error(error)
        }
      }
      return user
    },

    // async session({ session, data }: any) {
    //   session = {
    //     ...session,
    //     user: {
    //       id: data.id,
    //       ...session.user,
    //     }
    //   }
    // }
  },
}
