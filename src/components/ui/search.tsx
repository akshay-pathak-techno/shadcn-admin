import { Input } from '@/components/ui/input'
import { ChangeEvent, FC } from 'react'

interface SearchProps {
  searchTerm: string | undefined
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const Search: FC<SearchProps> = ({ searchTerm, onChange, placeholder }) => {
  return (
    <div>
      <Input
        placeholder={placeholder ?? 'Search...'}
        value={searchTerm}
        className='h-9 border bg-lightBlue shadow-none outline-lightSilver ring-1 ring-lightSilver'
        onChange={onChange}
        isSearch
      />
    </div>
  )
}

export { Search }
