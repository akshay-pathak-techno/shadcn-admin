import { authService } from '@/api'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { useAuth } from '@/hooks/use-auth'
import { Routes } from '@/data/routes'
import { LoginRequest, loginSchema } from '@/validations/auth.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

interface LoginFormProps {
  onForgotPasswordClick: () => void
}

const LoginForm: FC<LoginFormProps> = ({ onForgotPasswordClick }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const mutation = useMutation({
    mutationFn: async (data: LoginRequest) => authService.login(data),
    onSuccess: (response) => {
      let refreshToken = null
      if (!import.meta.env.VITE_COOKIE_BASED_AUTHENTICATION) {
        refreshToken = response.data.tokens.refresh?.token || ''
      }
      login(response.data.user, refreshToken)
      setIsLoading(false)
      toast({ title: response.message })
      navigate(Routes.DASHBOARD)
    },
    onError: (error) => {
      setIsLoading(false)
      toast({ title: error?.message })
    },
  })

  async function onSubmit(data: LoginRequest) {
    setIsLoading(true)
    mutation.mutateAsync(data)
  }

  return (
    <div className='my-4 px-4 md:px-36'>
      <h1 className='mb-4 text-center text-3xl font-semibold text-gunmetal'>
        Welcome back Admin!
      </h1>

      <Form {...form}>
        <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl className='mt-2' {...field}>
                      <Input placeholder='name@example.com' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password*</FormLabel>
                    <FormControl {...field}>
                      <Input type='password' placeholder='Enter password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              variant='link'
              type='button'
              className='mt-2 justify-start'
              size='link'
              onClick={onForgotPasswordClick}
            >
              Forgot your password?
            </Button>

            <p className='mt-2 text-sm font-light text-muted-foreground	opacity-80'>
              By signing in, you are consenting to our
              <Link to='/terms-of-service' className='text-primary underline'>
                {' '}
                Terms of Service{' '}
              </Link>
              and confirming that you have reviewed and accepted the{' '}
              <Link to='/terms-of-service' className='text-primary'>
                Global Privacy Statement
              </Link>
              .
            </p>
            <Button className='mt-2 rounded-full' loading={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export { LoginForm }
