import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

import { User } from '@/models/auth.model'

interface useAllUsersTableColumnsProps {
  actionHandler: (vehicleInfo: User) => void
}
type MyUserKeys = keyof User

const useAllUsersTableColumns = ({
  actionHandler,
}: useAllUsersTableColumnsProps) =>
  React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'id' as MyUserKeys,
        cell: (info) => info.getValue(),
        header: 'Id',
        enableSorting: true,
      },

      {
        accessorKey: 'username' as MyUserKeys,
        cell: (info) => info.getValue(),
        header: 'Name',
        enableSorting: true,
      },
      {
        accessorKey: 'email' as MyUserKeys,
        cell: (info) => info.getValue(),
        header: 'Email',
        enableSorting: true,
      },
      {
        accessorKey: 'role' as MyUserKeys,
        cell: (info) => info.getValue(),
        header: 'Role',
        enableSorting: true,
      },

      {
        accessorKey: 'actions',
        cell: (info) => actionHandler(info.row.original),
        header: '',
        enableSorting: false,
      },
    ],
    [actionHandler]
  )

export { useAllUsersTableColumns }
