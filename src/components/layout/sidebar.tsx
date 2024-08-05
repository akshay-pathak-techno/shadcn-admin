import { CollapsableSideBarIcon, AdminLogo } from '@/assets'
import { SideLink } from '@/data/sidelinks'
import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Layout } from './layout'
import Nav from './nav'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  sideLinks: SideLink[]
}

export default function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
  sideLinks,
}: SidebarProps) {
  const [navOpened, setNavOpened] = useState(false)

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [navOpened])

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-16' : 'md:w-56'}`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${navOpened ? 'h-svh opacity-50' : 'h-0 opacity-0'} w-full bg-black md:hidden`}
      />

      <Layout fixed className={navOpened ? 'h-svh' : ''}>
        {/* Header */}
        <Layout.Header
          sticky
          className={`z-50 flex justify-between bg-primary py-3 shadow-sm ${isCollapsed ? 'md:px-3' : 'md:px-4'}`}
        >
          <div
            className={`flex items-center px-[0.125rem] ${!isCollapsed ? 'gap-2' : ''}`}
          >
            <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-secondary'>
              <AdminLogo className='h-4 w-4 text-white  ' />
            </div>
            <div
              className={`flex flex-col justify-end truncate ${isCollapsed ? 'invisible w-0' : 'visible w-auto'}`}
            >
              <span className='text-[1.25rem] font-semibold text-secondary '>
                {' '}
                Admin
              </span>
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            aria-label='Toggle Navigation'
            aria-controls='sidebar-menu'
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </Layout.Header>

        {/* Navigation links */}
        <Nav
          id='sidebar-menu'
          className={`z-40 h-full flex-1 overflow-hidden bg-primary ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-3'}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sideLinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size='icon'
          variant='outline'
          className='absolute -right-5 top-16 z-50 hidden h-8 w-8 rounded-full bg-primary text-white hover:bg-primary md:inline-flex'
        >
          <CollapsableSideBarIcon
            className={`h-3 w-3 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </Button>
      </Layout>
    </aside>
  )
}
