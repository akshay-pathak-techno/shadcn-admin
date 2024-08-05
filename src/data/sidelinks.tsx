import { DashboardLogo } from '@/assets'
import { Routes } from '@/data/routes'
import { IconFileAnalytics, IconUser } from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sideLinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: Routes.DASHBOARD,
    icon: <DashboardLogo />,
  },
  {
    title: 'Users',
    label: '',
    href: Routes.USERS,
    icon: <IconUser size={30} />,
  },
  {
    title: 'Reports',
    label: '',
    href: '',
    icon: <IconFileAnalytics size={30} />,
    sub: [
      {
        title: 'Report 1',
        label: '',
        href: '/reports/type1',
        icon: <IconFileAnalytics size={24} />,
      },
      {
        title: 'Report 2',
        label: '',
        href: '/reports/type2',
        icon: <IconFileAnalytics size={24} />,
      },
      {
        title: 'Report 3',
        label: '',
        href: '/reports/type3',
        icon: <IconFileAnalytics size={24} />,
      },
    ],
  },
]
