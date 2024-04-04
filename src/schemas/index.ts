import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Password minimum of 6 required!"
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required!"
    }),
});

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password is required!"
    })
});

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Password must contain at least 6 character(s)"
    })
});