export const mockUser = {
  id: 1,
  username: 'John Doe',
  email: 'test@test.com',
  role: 'customer',
}

export const mockLoginResponse = {
  data: {
    user: mockUser,
    tokens: {
      access: {
        token: 'access-token',
        expires: new Date(),
      },
      refresh: {
        token: 'access-token',
        expires: new Date(),
      },
    },
  },
  message: 'Login successful',
  status: 200,
}

export const mockResetPasswordResponse = {
  status: 200,
  message: 'Password reset successful',
  data: {
    message: 'Your password has been successfully reset.',
  },
}

export const mockGenerateNewTokenResponse = {
  data: {
    access: {
      token: 'access-token',
      expires: new Date(),
    },
  },
  message: '',
  status: 200,
}

export const mockForgotPasswordResponse = {
  status: 200,
  message: 'Reset password link sent to email successfully',
  data: {
    message: 'Reset password link sent to email successfully',
  },
}

export const mockUsersResponse = {
  status: 200,
  message: 'Users retrieved successfully',
  data: {
    users: [
      {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@example.com',
        role: 'admin',
      },
      {
        id: 2,
        username: 'jane_smith',
        email: 'jane.smith@example.com',
        role: 'user',
      },
      {
        id: 3,
        username: 'alice_johnson',
        email: 'alice.johnson@example.com',
        role: 'user',
      },
    ],
    count: 3,
  },
}
