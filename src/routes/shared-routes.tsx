import GeneralError from '@/app/pages/errors/general-error'
import { RouteObject } from 'react-router-dom'
import { Routes } from '../data/routes'
import NotFoundError from '@/app/pages/errors/not-found-error'
import { FeatureComingSoon } from '@/app/pages/feature-coming-soon/feature-coming-soon'

export const commonRoutes: RouteObject[] = [
  { path: Routes.ERROR.GENERAL, Component: GeneralError },
  { path: Routes.ERROR.NOT_FOUND, Component: NotFoundError },
  {
    path: Routes.FALLBACK,
    Component: () => {
      const flatRoutes: string[] = []

      const flatten = (obj: object) => {
        Object.values(obj).forEach((value) => {
          if (typeof value === 'string') {
            flatRoutes.push(value)
          } else if (typeof value === 'object' && value !== null) {
            flatten(value)
          }
        })
      }

      flatten(Routes)

      const routeExists = flatRoutes.includes(location.pathname)

      if (routeExists) {
        return <FeatureComingSoon />
      } else {
        return <NotFoundError />
      }
    },
  },
]
