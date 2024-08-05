import { FC } from 'react'
import { AuthLayout } from './components/auth-layout'
import { ResetPasswordForm } from './components/reset-password-form'

const ResetPassword: FC = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  )
}

export default ResetPassword
