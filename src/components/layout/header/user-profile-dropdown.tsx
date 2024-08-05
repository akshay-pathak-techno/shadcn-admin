import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Routes } from '@/data/routes'
import { ProfileImage } from '@/assets'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog'

export const UserProfileDropdown: React.FC = () => {
  const [isOpenDialog, setOpenDialog] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = (shouldLogout: boolean) => {
    if (shouldLogout) {
      logout()
      navigate(Routes.LOGIN)
    }
    setOpenDialog(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='relative h-8 rounded-full pl-1'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={ProfileImage} alt='sn' />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <UserName />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>developer</p>
            <p className='text-xs leading-none text-muted-foreground'>
              developer@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault()
            setOpenDialog(true)
          }}
        >
          Log out
          {
            <ConfirmationDialog
              isOpen={isOpenDialog}
              message={'Are you sure you want to log out?'}
              onConfirm={() => handleLogout(true)}
              onClose={() => handleLogout(false)}
              confirmBtnText={'Log out'}
            />
          }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const UserName: React.FC = () => {
  return <div className='ml-[0.6rem]'>Gustanto</div>
}
