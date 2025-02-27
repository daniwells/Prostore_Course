import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";

export const config = {
    debug: true,
    pages: {
        signIn: "/sign-in",
        error: "/sign-in",
    },
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 dias
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: "email" },
                password: { type: "password" },
            },
            async authorize(credentials) {
                if (!credentials) return null;

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email as string,
                    },
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password as string, user.password);
                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async session({session, user, trigger, token}: any){
            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name;

            if(trigger === "update"){
                session.user.name = user.name;
            }

            return session;
        },
        async jwt({token, user, trigger, session}: any){
            // Assign user fields to token
            if(user){
                token.id = user.id;
                token.role = user.role;

                // If user has no name then yse the email
                if(user.name === "NO_NAME"){
                    token.name = user.email!.split("@")[0];

                    // Update database to reflect the token name
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {name: token.name},
                    });
                }

                if(trigger === "signIn" || trigger === "signUp"){
                    const cookiesObject = await cookies();
                    const sessionCartId = cookiesObject.get("sessionCartId")?.value;

                    if(sessionCartId){
                        const sessionCart = await prisma.cart.findFirst({
                            where: { sessionCartId }
                        });

                        if(sessionCart){
                            // Delete current user cart
                            await prisma.cart.deleteMany({
                                where: {userId: user.id},
                            });

                            // Assign new cart
                            await prisma.cart.update({
                                where: {id: sessionCart.id},
                                data: {userId: user.id},
                            })
                        }
                    }
                }
            }

            // Handle session updates
            if(session?.user.name && trigger === "update"){
                token.name = session.user.name;
            }

            return token;
        },
    },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
