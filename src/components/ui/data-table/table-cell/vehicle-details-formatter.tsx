import { FC } from 'react'

interface VehicleDetails {
  logo: string
  image: string
  model: string
  trim: string
}

interface VehicleDetailsFormatterProps {
  info: VehicleDetails
}

const VehicleDetailsFormatter: FC<VehicleDetailsFormatterProps> = ({
  info,
}) => {
  return <p className='text-sm text-darkGray'>{info.trim}</p>
}

export { VehicleDetailsFormatter }
