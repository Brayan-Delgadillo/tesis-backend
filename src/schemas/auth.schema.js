import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
    role: z.string({
        required_error: 'Role is required'
    }),
    ruc: z.number({
        required_error: 'RUC is required'
    }).min(10000000000, {
        message: 'RUC must be at least 11 digits'
    }).max(99999999999, {
        message: 'RUC must be 11 digits only'
    }),
    phone: z.number({
        required_error: 'Phone is required'
    }).min(900000000, {
        message: 'Phone must be at least 9 digits'
    }).max(999999999, {
        message: 'Phone must be 9 digits only'
    }),
    direction: z.string({
        required_error: 'Direction is required'
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: 'Password must be at least 6 characters'
    }),
});