import User from "@/models/User";
import connect from "@/utils/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const hanlder = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect();

                try {
                    const user = await User.findOne({ email: credentials.email })

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);


                        if (isPasswordCorrect) {
                            return user;
                        } else {

                            throw new Error("Invalid credentials")
                        }
                    } else {
                        throw new Error("invalid credentials")
                    }
                } catch (error) {
                    return new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        }),

    ],
    pages: {
        error: "/Dashboard/login"
    }
})

export { hanlder as GET, hanlder as POST }