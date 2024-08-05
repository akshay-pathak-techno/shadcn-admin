import { useState } from 'react'
import { AuthLayout } from './components/auth-layout'
import { LoginForm } from './components/login-form'
import { ForgotPasswordForm } from './components/forgot-password-form'

const LogIn: React.FC = () => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] =
    useState<boolean>(false)

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordOpen(true)
  }

  return (
    <AuthLayout>
      <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />
      <ForgotPasswordForm
        isOpen={isForgotPasswordOpen}
        onOpenChange={setIsForgotPasswordOpen}
      />
    </AuthLayout>
  )
}

export default LogIn
