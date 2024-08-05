import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useReactTable, getCoreRowModel } from '@tanstack/react-table'
import { userService } from '@/api'
import { Delete, EditAction } from '@/assets'
import { Button } from '@/components/ui/button'
import { useTableState } from '@/hooks/use-table-state'
import { Search } from '@/components/ui/search'
import ActionDropdownMenu from '@/components/ui/action-select'
import DataTable from '@/components/ui/data-table/data-table'
import { useAllUsersTableColumns } from '../hooks/use-all-users-table-columns'
import { User } from '@/models/auth.model'

const initialTableState = {
  pagination: {
    pageIndex: 1,
    pageSize: 10,
  },
  sorting: {
    order: 'asc',
    field: '',
  },
  search: '',
}

const AllUsers = () => {
  const {
    tableState,
    handlePaginationChange,
    handleSortChange,
    handleSearchChange,
  } = useTableState({
    initialState: initialTableState,
  })

  const { data, isFetching, error } = useQuery({
    queryKey: ['all-vehicle', tableState],
    queryFn: () =>
      userService.getAllUsers({
        pagination: tableState.pagination,
      }),
    placeholderData: keepPreviousData,
  })

  const getActionItems = (_user: User) => {
    const actionItems = [
      {
        label: 'Edit',
        icon: <EditAction className='mr-2' />,
        onClick: () => {},
      },
      {
        label: 'Delete',
        icon: <Delete className='mr-2' />,
        onClick: () => {},
        className: 'text-red focus:text-red ',
      },
    ]

    return <ActionDropdownMenu items={actionItems} />
  }
  const columns = useAllUsersTableColumns({
    actionHandler: getActionItems,
  })

  const tableProps = useReactTable({
    data: data?.data?.users || [],
    columns,
    rowCount: data?.data?.count || 0,
    state: {
      pagination: tableState.pagination,
      sorting: tableState.sorting.data,
    },
    onPaginationChange: handlePaginationChange,
    onSortingChange: handleSortChange,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
  })

  return (
    <div>
      <div className='mb-3 flex flex-col items-center gap-2 md:flex-row'>
        <p className='text-base font-medium text-steelBlue'>User List</p>
        <div className='flex flex-row items-center gap-4 sm:flex-col md:ml-auto md:flex-row'>
          <Search
            onChange={handleSearchChange}
            searchTerm={tableState.search}
          />
          <Button className='rounded-lg px-8 py-4 text-base'>Add User</Button>
        </div>
      </div>

      <div className='rounded-md bg-white p-4 px-6'>
        <DataTable<User>
          tableProps={tableProps}
          isFetching={isFetching}
          isError={!!error}
          totalColumn={columns.length}
          hasRecord={!!data?.data?.users?.length}
        />
      </div>
    </div>
  )
}

export { AllUsers }
