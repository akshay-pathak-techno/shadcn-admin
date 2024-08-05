import { FC } from 'react'

interface RegoNumberFormatterProps {
  regoNumber: string
}

const RegoNumberFormatter: FC<RegoNumberFormatterProps> = ({ regoNumber }) => (
  <div className='p-2'>
    <p className='rounded-full bg-primary px-4 py-2 text-center font-medium text-white'>
      {regoNumber}
    </p>
  </div>
)

export { RegoNumberFormatter }
