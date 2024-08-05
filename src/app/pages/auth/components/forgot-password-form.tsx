import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FC, useState } from 'react'
import {
  ForgotPasswordRequest,
  forgotPasswordSchema,
} from '@/validations/auth.validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/api'
import { toast } from '@/components/ui/use-toast'

interface ForgotPasswordFormProps {
  isOpen: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ForgotPasswordRequest>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  const mutation = useMutation({
    mutationFn: async (data: ForgotPasswordRequest) =>
      authService.forgotPassword(data),

    onSuccess: (response) => {
      setIsLoading(false)
      toast({ title: response.message })
      onOpenChange(false)
      form.reset()
    },
    onError: (error) => {
      setIsLoading(false)
      toast({ title: error?.message })
    },
  })

  const onSubmit = async (data: ForgotPasswordRequest) => {
    setIsLoading(true)
    mutation.mutateAsync(data)
  }

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        onInteractOutside={(event) => event.preventDefault()}
        className='w-96 rounded-xl px-10 sm:w-full sm:max-w-xl md:px-20'
      >
        <DialogHeader className='mt-2 space-y-4'>
          <DialogTitle className='text-center text-2xl text-gunmetal'>
            Forgot your password?
          </DialogTitle>
          <DialogDescription className='text-center text-base text-charcoal'>
            Need to reset your password? No problem! Just enter your email below
            and you'll be on your way.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-4 grid gap-6'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className='grid gap-2'>
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
                <div className='my-3 flex justify-center'>
                  <Button
                    className='mt-3 w-40 rounded-full	text-center	 text-lg font-medium md:w-72'
                    loading={isLoading}
                    size='lg'
                  >
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export { ForgotPasswordForm }
