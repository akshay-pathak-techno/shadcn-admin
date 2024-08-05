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
import { cn } from '@/lib/utils'
import { Routes } from '@/data/routes'
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from '@/validations/auth.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { FC, HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'

interface ResetPasswordFormProps extends HTMLAttributes<HTMLDivElement> {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { token } = useParams<{ token: string }>()

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      repeatPassword: '',
    },
  })

  const mutation = useMutation({
    mutationFn: async (data: ResetPasswordFormData) => {
      return authService.resetPassword({
        password: data.newPassword,
        token: token ?? '',
      })
    },
    onSuccess: (response) => {
      setIsLoading(false)
      toast({
        title: response.message,
      })
      navigate(Routes.LOGIN)
    },
    onError: (error) => {
      setIsLoading(false)
      toast({
        title: error?.message,
      })
    },
  })

  async function onSubmit(data: ResetPasswordFormData) {
    setIsLoading(true)
    mutation.mutateAsync(data)
  }

  return (
    <div className={cn('my-4 px-4 md:px-36', className)} {...props}>
      <h1 className='mb-4 text-center text-3xl font-semibold text-gunmetal'>
        Change Password
      </h1>

      <p className='my-4 text-center text-charcoal'>
        Set your new password and click reset password
      </p>

      <Form {...form}>
        <form className='mt-4' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='grid gap-2'>
            <div className='space-y-6'>
              <FormField
                control={form.control}
                name='newPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password*</FormLabel>
                    <FormControl {...field}>
                      <Input type='password' placeholder='Enter password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='repeatPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repeat Password*</FormLabel>
                    <FormControl {...field}>
                      <Input type='password' placeholder='Enter password' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

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
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export { ResetPasswordForm }
