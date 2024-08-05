import { FC } from 'react'

interface IconFormatterProps {
  name: string
  icon: React.FC
}

const IconFormatter: FC<IconFormatterProps> = ({ name, icon: Icon }) => (
  <div className='flex items-center justify-center gap-2'>
    <Icon />
    {name}
  </div>
)

export { IconFormatter }
