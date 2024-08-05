import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function FeatureComingSoon() {
  const navigate = useNavigate()
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] font-bold leading-tight'>501</h1>
        <span className='font-medium'>Coming Soon 👀</span>
        <p className='text-center text-muted-foreground'>
          It seems like the feature you're looking for <br />
          is currently under development and will be available soon.
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline' onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button onClick={() => navigate('/')}>Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
