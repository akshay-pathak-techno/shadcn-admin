import React from 'react'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progressPercent = (currentStep / totalSteps) * 100

  return (
    <div className='h-3 overflow-hidden rounded-lg bg-[#E9E9E9]'>
      <div
        className='h-full bg-primary'
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  )
}

export default ProgressBar
