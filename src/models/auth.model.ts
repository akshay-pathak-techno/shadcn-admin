import { GenericResponse } from './generic'

export interface User {
  id: number
  username: string
  email: string
  role: UserRole
}

export type LoginResponse = GenericResponse<{
  user: User
  tokens: Tokens
}>

export type ResetPasswordRequest = {
  password: string
  token: string
}

export type ResetPasswordResponse = GenericResponse<{
  message: string
}>

export type ForgotPasswordResponse = GenericResponse<{
  message: string
}>

export interface Tokens {
  access: Access
  refresh?: Access
}

export interface Access {
  token: string
  expires: Date
}

export type GenerateNewTokenResponse = GenericResponse<Tokens>

export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}
