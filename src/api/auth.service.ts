import {
  GenerateNewTokenResponse,
  LoginResponse,
  ResetPasswordResponse,
  ResetPasswordRequest,
  User,
  ForgotPasswordResponse,
} from '@/models/auth.model'
import { apiService } from './api.service'
import {
  LoginRequest,
  ForgotPasswordRequest,
} from '@/validations/auth.validation'
import {
  mockForgotPasswordResponse,
  mockGenerateNewTokenResponse,
  mockLoginResponse,
  mockResetPasswordResponse,
  mockUser,
} from '@/data/mock-response'

class AuthService {
  private api: typeof apiService
  controller: string = 'auth'

  constructor() {
    this.api = apiService
  }

  async login(body: LoginRequest) {
    return Promise.resolve(mockLoginResponse as LoginResponse)
    return this.api.post<LoginResponse>(`${this.controller}/login`, body)
  }

  async resetPassword(body: ResetPasswordRequest) {
    return Promise.resolve(mockResetPasswordResponse as ResetPasswordResponse)
    return this.api.post<ResetPasswordResponse>(
      `${this.controller}/reset-password`,
      body
    )
  }

  async getAccessToken(refreshToken: string | null = null) {
    return Promise.resolve(
      mockGenerateNewTokenResponse as GenerateNewTokenResponse
    )
    return this.api.post<GenerateNewTokenResponse>(
      `${this.controller}/access-token`,
      refreshToken ? { refreshToken } : undefined
    )
  }

  async getUserInfo(): Promise<User> {
    return Promise.resolve(mockUser as User)
    return this.api.get<User>(`${this.controller}/me`)
  }

  async forgotPassword(body: ForgotPasswordRequest) {
    return Promise.resolve(mockForgotPasswordResponse as ForgotPasswordResponse)
    return this.api.post<ForgotPasswordResponse>(
      `${this.controller}/forgot-password`,
      body
    )
  }
}

export const authService = new AuthService()
