import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Action } from '@/assets'
import { cn } from '@/lib/utils'

interface ActionSelectProps {
  items: {
    label: string
    icon: React.ReactNode
    onClick: () => void
    className?: string
  }[]
}

const ActionSelect: React.FC<ActionSelectProps> = ({ items }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='h-8 w-8 p-0 outline-none hover:bg-transparent focus:outline-none'
        >
          <span className='sr-only'>Open Action</span>
          <img className='cursor-pointer' src={Action} alt='action' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='divide-y divide-lightSilver px-4 py-2 shadow-soft'
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className={cn(
              'cursor-pointer py-2 text-base font-medium text-primary hover:bg-white focus:bg-white focus:text-primary',
              item.className
            )}
            onClick={item.onClick}
          >
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActionSelect
