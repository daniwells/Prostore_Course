"use server"

import { signInFormSchema } from "../validators"
import { signIn, signOut } from "@/auth";
// import { signIn, signOut } from "next-auth/react";
import { isRedirectError } from "next/dist/client/components/redirect-error";


export async function signInWithCredentials(prevState: unknown, formData: FormData){
    try{
        const user = signInFormSchema.parse({
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false,
        });
        
        const response = await signIn("credentials", user);
        console.log(response)

        return { success: true, message: "Signed in successfully" }
    }catch(error){
        console.log(error)
        if(isRedirectError(error)){
            throw error;
        }

        return { success: false, message: "Invalid email or password" };
    }
}

export async function signOutUser(){
    await signOut();
}