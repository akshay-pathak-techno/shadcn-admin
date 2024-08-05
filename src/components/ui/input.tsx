import * as React from 'react'

import { cn } from '@/lib/utils'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { Button } from './button'
import { Search2 } from '@/assets'
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isSearch?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isSearch, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const error = props['aria-errormessage'] ?? ''

    return (
      <div
        className={cn(
          type === 'password' && 'relative rounded-md',
          isSearch && ' relative rounded-md'
        )}
      >
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          className={cn(
            'flex h-12 w-full rounded-lg border-none bg-snow px-3 py-1 text-base text-richBlack  shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            type === 'password' && 'pe-8',
            isSearch && 'ps-10',
            className,
            error && 'ring-1 ring-red focus-visible:ring-red'
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && (
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground'
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <IconEye size={18} /> : <IconEyeOff size={18} />}
          </Button>
        )}
        {isSearch && (
          <Button
            type='button'
            size='icon'
            variant='ghost'
            className='absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-md text-muted-foreground'
          >
            <p>
              <Search2 />
            </p>
          </Button>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
