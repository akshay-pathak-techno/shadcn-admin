import { FC, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ArrowDown } from '@/assets'
import { cn } from '@/lib/utils'
import { Options } from '@/data/options'
import { Label } from './label'

interface DropdownSelectorProps {
  name: string
  placeholder: string
  options: Options[]
  searchPlaceholder: string
  label: string
}

const DropdownSelector: FC<DropdownSelectorProps> = ({
  name,
  placeholder,
  options,
  searchPlaceholder,
  label,
}) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext()

  const error = errors[name]
  const errorMessage = error ? String(error.message) : ''

  const [open, setOpen] = useState(false)

  return (
    <div className=' w-full '>
      <Label className={cn('text-md mb-2 flex font-medium text-charcoal')}>
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild className='w-100'>
              <button
                type='button'
                className={cn(
                  'relative flex h-12 w-full cursor-pointer items-center justify-between',
                  'rounded-lg border-none bg-snow px-3 py-1 text-base text-richBlack  shadow-sm transition-colors     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                  open && 'ring-1 ring-ring',
                  error && 'ring-1 ring-red'
                )}
                onClick={() => setOpen(!open)}
              >
                <span
                  className={cn(
                    'flex items-center',
                    field.value === '' && 'text-muted-foreground opacity-50'
                  )}
                >
                  {field.value !== '' ? field.value : placeholder}
                </span>
                <img
                  className='ml-1'
                  height={18}
                  width={18}
                  src={ArrowDown}
                  alt='Expand'
                />
              </button>
            </PopoverTrigger>
            {open && (
              <PopoverContent
                className='w-popover-trigger-width p-0'
                side='bottom'
                align='start'
              >
                <Command>
                  <CommandInput placeholder={searchPlaceholder} />
                  <CommandList>
                    {options.length > 0 ? (
                      <CommandGroup>
                        {options.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(value) => {
                              setValue(name, value, {
                                shouldValidate: true,
                              })
                              setOpen(false)
                            }}
                          >
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ) : (
                      <CommandEmpty>No results found.</CommandEmpty>
                    )}
                  </CommandList>
                </Command>
              </PopoverContent>
            )}
          </Popover>
        )}
      />
      {errorMessage && (
        <p className='mt-2 flex text-[0.8rem] font-medium text-destructive'>
          {errorMessage}
        </p>
      )}
    </div>
  )
}

export { DropdownSelector }
