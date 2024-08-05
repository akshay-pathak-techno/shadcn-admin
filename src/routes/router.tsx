import { FC } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'
import { authService } from '@/api'
import { tokenStore } from '@/store/token'
import Loader from '@/components/ui/loader'
import Setup from './setup'

const Router: FC = () => {
  const { login, logout, isLoggedIn, refreshToken } = useAuth() // Assume 'role' is added to useAuth hook
  const { isLoading } = useQuery<Promise<boolean>>({
    queryKey: ['user', isLoggedIn],
    queryFn: async () => {
      if (isLoggedIn) {
        try {
          const {
            data: { access },
          } = await authService.getAccessToken(refreshToken)

          tokenStore.setAccessToken(access)
          const user = await authService.getUserInfo()
          login(user)
        } catch {
          logout()
          return true // handle this as true to remove loader
        }
      }
      return true
    },
  })

  if (isLoading) {
    return <Loader />
  }
  return <Setup />
}

export default Router
