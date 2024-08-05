import { FC } from 'react'
import { IconFormatter } from './icon-formatter'
import { SolarLink } from '@/assets'

interface VehicleLinkFormatterProps {
  linkedVehicles: {
    name: string
  }[]
}

const VehicleLinkFormatter: FC<VehicleLinkFormatterProps> = ({
  linkedVehicles,
}) => (
  <div className='space-y-2'>
    {linkedVehicles.map((vehicleInfo) => (
      <div key={vehicleInfo.name}>
        <IconFormatter name={vehicleInfo.name} icon={SolarLink} />
      </div>
    ))}
  </div>
)

export { VehicleLinkFormatter }
