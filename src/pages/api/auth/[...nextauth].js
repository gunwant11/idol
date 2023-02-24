import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    // Configure one or more authentication providers

    // callbacks: {
    //     async jwt({ token, account }) {
    //         if (account) {
    //             token.accessToken = account.accessToken
    //         }
    //         return token
    //     },
    // },


    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],

})




