import { FC, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { FormControl, FormField, FormMessage } from './form'
import { Input } from './input'
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

interface DualFieldInputProps {
  inputField: string
  selectField: string
  inputPlaceholder: string
  selectPlaceholder: string
  containerClassName?: string
  size?: 'small' | 'medium' | 'large'
  isSelectRightSide?: boolean
  searchPlaceholder: string
  options: Options[]
  displayError?: boolean
  label?: string
  selectClassName?: string
}

const DualFieldInput: FC<DualFieldInputProps> = ({
  inputField,
  selectField,
  containerClassName = '',
  size = 'medium',
  isSelectRightSide = false,
  inputPlaceholder = '',
  selectPlaceholder = '',
  searchPlaceholder = '',
  options,
  displayError = true,
  label,
  selectClassName,
}) => {
  const { control, setValue } = useFormContext()

  const [open, setOpen] = useState(false)

  // Calculate width based on size
  const widthClass = cn({
    'w-12': size === 'small',
    'w-20 md:w-24': size === 'medium',
    'w-28': size === 'large',
  })

  // Calculate padding based on size and isSelectRightSide
  const paddingClass = cn({
    'ps-[4rem]': size === 'small' && isSelectRightSide,
    'pe-[4rem]': size === 'small' && !isSelectRightSide,
    'ps-[5.5rem]': size === 'medium' && isSelectRightSide,
    'pe-[5.5rem]': size === 'medium' && !isSelectRightSide,
    'ps-[7rem]': size === 'large' && isSelectRightSide,
    'pe-[7rem]': size === 'large' && !isSelectRightSide,
  })

  const positionClass = isSelectRightSide ? 'left-0' : 'right-0'
  const borderClass = isSelectRightSide ? '!border-e' : '!border-s'

  return (
    <div className={containerClassName}>
      <Label className={cn('text-md flex font-medium text-charcoal')}>
        {label}
      </Label>
      <div className='relative rounded-md'>
        <Controller
          name={selectField}
          control={control}
          render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className='w-100'>
                <button
                  type='button'
                  className={cn(
                    'bg-tr absolute top-2 flex h-8 cursor-pointer items-center justify-between px-2',
                    positionClass,
                    'rounded-none border-x-0 border-y-0 border-muted-foreground text-base shadow-none outline-none ring-0 hover:bg-transparent hover:ring-0',
                    widthClass,
                    borderClass,
                    selectClassName
                  )}
                  onClick={() => setOpen(!open)}
                >
                  <span
                    className={cn(
                      'flex items-center',
                      field.value === '' && 'text-muted-foreground opacity-50'
                    )}
                  >
                    {field.value !== '' ? field.value : selectPlaceholder}
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
                  className='w-100 p-0'
                  side='bottom'
                  align='start'
                >
                  <Command
                    filter={(value, search) => {
                      const option = options.find(
                        (item) =>
                          item.value.toLowerCase() === value.toLowerCase()
                      )
                      if (option) {
                        // Check if the search string is included in either option.value or option.label
                        const valueIncludesSearch = option.value
                          .toLowerCase()
                          .includes(search.toLowerCase())
                        const labelIncludesSearch = option.label
                          .toLowerCase()
                          .includes(search.toLowerCase())
                        return valueIncludesSearch || labelIncludesSearch
                          ? 1
                          : 0
                      }

                      return 0
                    }}
                  >
                    <CommandInput placeholder={searchPlaceholder} />
                    <CommandList>
                      {options.length > 0 ? (
                        <CommandGroup>
                          {options.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={(value) => {
                                const option = options.find(
                                  (item) =>
                                    item.value.toLowerCase() ===
                                    value.toLowerCase()
                                )

                                setValue(selectField, option?.value)
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
        <FormField
          control={control}
          name={inputField}
          render={({ field }) => (
            <>
              <FormControl className={cn(paddingClass)}>
                <Input
                  {...field}
                  className='mb-2'
                  placeholder={inputPlaceholder}
                />
              </FormControl>
              {displayError && <FormMessage />}
            </>
          )}
        />
      </div>
    </div>
  )
}

export { DualFieldInput }
