import { flexRender, Table as TableProps } from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ArrowDown2, ArrowUp } from '@/assets'
import { cn } from '@/lib/utils'

interface DataTableProps<T> {
  tableProps: TableProps<T>
  isFetching: boolean
  isError: boolean
  totalColumn: number
  hasRecord: boolean
}

const DataTable = <T extends object>({
  tableProps,
  isFetching,
  isError,
  totalColumn,
  hasRecord,
}: DataTableProps<T>) => {
  return (
    <Table>
      <TableHeader>
        {tableProps.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const canSort = header.column.getCanSort()
              return (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={
                    canSort
                      ? header.column.getToggleSortingHandler()
                      : undefined
                  }
                  className={canSort ? 'cursor-pointer' : undefined}
                >
                  <div
                    className={cn(
                      'flex items-center justify-center gap-2',
                      header.column.columnDef.meta?.className
                    )}
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    {canSort && (
                      <span className='flex items-center'>
                        {header.column.getIsSorted() === 'asc' ? (
                          <ArrowUp className='h-3 w-3' />
                        ) : header.column.getIsSorted() === 'desc' ? (
                          <ArrowDown2 className='h-3 w-3' />
                        ) : (
                          <p></p>
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {hasRecord ? (
          tableProps.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={totalColumn} className='h-24 text-center'>
              {isFetching
                ? 'Fetching records'
                : isError
                  ? 'Error fetching data'
                  : 'No results.'}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default DataTable
