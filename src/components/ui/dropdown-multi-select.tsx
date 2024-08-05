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
import { ArrowDown, Search } from '@/assets'
import { cn } from '@/lib/utils'
import { Options } from '@/data/options'
import { Label } from './label'
import { IconX } from '@tabler/icons-react'

interface DropdownMultiSelectProps {
  name: string
  placeholder: string
  options: Options[]
  searchPlaceholder: string
  label?: string
}

const DropdownMultiSelect: FC<DropdownMultiSelectProps> = ({
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
  const [selectOptions, setSelectOptions] = useState(options)
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string, fieldValue: string[]) => {
    if (value) {
      const newValue = fieldValue ?? []
      if (!newValue.includes(value)) {
        newValue.push(value)
        setValue(name, newValue, { shouldValidate: true })
        setSelectedItems(newValue)
        setSelectOptions((prevOptions) =>
          prevOptions.filter((option) => option.value !== value)
        )
      }
    }
    setOpen(false)
  }
  const handleRemove = (item: string) => {
    const newValue = selectedItems.filter(
      (selectedItem) => selectedItem !== item
    )
    setValue(name, newValue, { shouldValidate: true })
    setSelectedItems(newValue)
    setSelectOptions((prevOptions) => [
      ...prevOptions,
      options.find((option) => option.value === item)!,
    ])
  }

  return (
    <div>
      {label && (
        <Label className={cn('mb-4 flex text-base font-medium text-charcoal')}>
          {label}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild className='w-full'>
                <button
                  type='button'
                  className={cn(
                    'relative flex h-12 w-full cursor-pointer items-center justify-between',
                    'rounded-lg border-none bg-snow px-3 py-1 text-base text-richBlack shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                    open && 'ring-1 ring-ring',
                    error && 'ring-1 ring-red'
                  )}
                  onClick={() => setOpen(!open)}
                >
                  <div className='flex w-full flex-wrap '>
                    <div className='flex items-center gap-2'>
                      <img
                        className='ml-1'
                        height={18}
                        width={18}
                        src={Search}
                        alt='Search'
                      />
                      <span className=' text-muted-foreground opacity-50'>
                        {placeholder}
                      </span>
                    </div>

                    <img
                      className='ml-auto'
                      height={18}
                      width={18}
                      src={ArrowDown}
                      alt='Expand'
                    />
                  </div>
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
                      {selectOptions.length > 0 ? (
                        <CommandGroup>
                          {selectOptions.map((option) => (
                            <CommandItem
                              key={option.value}
                              value={option.value}
                              onSelect={() =>
                                handleSelect(option.value, field.value)
                              }
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
            {selectedItems.length > 0 && (
              <div className='mt-3 flex flex-wrap gap-4'>
                {selectedItems.map((item, index) => (
                  <div
                    key={index}
                    className='text-md flex items-center gap-2 rounded-full border border-lightGray px-4 py-1 text-mediumGray'
                  >
                    {item}
                    <span
                      className='cursor-pointer text-black'
                      onClick={() => handleRemove(item)}
                    >
                      <IconX />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
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

export { DropdownMultiSelect }
