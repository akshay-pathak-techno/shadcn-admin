import { FC } from 'react'

interface FamilyNameFormatterProps {
  name: string
  icon: string
  relation: string
}

const FamilyNameFormatter: FC<FamilyNameFormatterProps> = ({
  name,
  icon,
  relation,
}) => (
  <div className='flex items-center justify-start gap-4 font-medium text-charcoalGray'>
    <div className='h-8 w-8'>
      <img src={icon} alt={name} className='h-12 w-12' />
    </div>
    <div>
      <p>{name}</p>
      <p>{relation}</p>
    </div>
  </div>
)

export { FamilyNameFormatter }
