import { useMemo } from 'react'
import { RouterProvider, redirect } from 'react-router-dom'

import { useAuth } from '@/hooks/use-auth'
import { commonRoutes } from './shared-routes'
import GeneralError from '@/app/pages/errors/general-error'
import { Routes } from '../data/routes'
import { sentryCreateBrowserRouter } from './sentry-create-browse-router'

const Setup = () => {
  const { isLoggedIn } = useAuth()

  const routers = useMemo(() => {
    const mainLoader = () => {
      if (!isLoggedIn) {
        return redirect(Routes.LOGIN)
      } else {
        return null
      }
    }
    const authLoader = () => {
      if (isLoggedIn) {
        return redirect(Routes.DASHBOARD)
      } else {
        return null
      }
    }

    return sentryCreateBrowserRouter([
      {
        path: Routes.LOGIN,
        lazy: async () => ({
          Component: (await import('../app/pages/auth/login')).default,
        }),
        loader: authLoader,
      },
      {
        path: Routes.RESET_PASSWORD,
        lazy: async () => ({
          Component: (await import('../app/pages/auth/reset-password')).default,
        }),
        loader: authLoader,
      },
      {
        path: Routes.DASHBOARD,
        lazy: async () => {
          const AppShell = await import('@/components/layout/app-shell')
          return { Component: AppShell.default }
        },
        loader: mainLoader,
        errorElement: <GeneralError />,
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('../app/pages/dashboard')).default,
            }),
          },
          {
            path: Routes.USERS,
            lazy: async () => ({
              Component: (await import('../app/pages/users')).default,
            }),
          },
        ],
      },
      ...commonRoutes,
    ])
  }, [isLoggedIn])

  return <RouterProvider router={routers} />
}

export default Setup
