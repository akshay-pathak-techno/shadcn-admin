import { z } from 'zod'
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
})

export type LoginRequest = z.infer<typeof loginSchema>

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
})

export type ForgotPasswordRequest = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(50, { message: 'Password must be less than 50 characters long' }),
    repeatPassword: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters long' })
      .max(50, { message: 'Password must be less than 50 characters long' }),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    message: "Passwords don't match",
    path: ['repeatPassword'],
  })

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
