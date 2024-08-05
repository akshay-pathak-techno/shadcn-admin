import { AdminLogo, DotGroupBottom, DotGroupTop } from '@/assets'
import { Button } from '@/components/ui/button'
import { FC } from 'react'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen font-outfit'>
      <div className='sticky top-0 hidden  w-4/12 flex-col bg-primary py-7  lg:flex'>
        <div className='absolute -right-2 top-0 '>
          <DotGroupTop className='h-16' />
        </div>
        <div className='px-7'>
          <Button className='btn mb-16 mt-2 flex w-36 items-center justify-center rounded-full bg-white text-primary hover:bg-white hover:text-primary'>
            <AdminLogo className='h-5' />
            <p className='text-lg font-semibold'>Admin</p>
          </Button>
          <h4 className='w-10/12 text-2xl font-semibold text-white md:text-3xl'>
            Our company
          </h4>
          <p className='mt-3 text-sm text-white opacity-75'>Our motto</p>
        </div>
        <div className='absolute -left-12 bottom-0'>
          <DotGroupBottom className='h-24 md:h-32' />
        </div>
      </div>
      <div className='m-auto flex flex-col overflow-y-auto p-4 lg:w-4/6'>
        {children}
      </div>
    </div>
  )
}

export { AuthLayout }
