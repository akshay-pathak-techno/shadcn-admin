import { Link } from 'react-router-dom'
import { IconChevronRight } from '@tabler/icons-react'
import { Layout } from '@/components/layout/layout'
import { Breadcrumb, BreadcrumbItem } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import ThemeSwitch from '@/components/layout/theme/theme-switch'
import { UserNav } from '@/components/layout/header/user-nav'

export default function ExtraComponents() {
  const items = [
    { title: 'Extra Components', href: '/extra-components' },
    { title: 'Breadcrumb' },
  ].map(({ href, title }) => (
    <BreadcrumbItem key={title}>
      {href ? (
        <Link
          className='text-muted-foreground underline decoration-muted-foreground decoration-dashed underline-offset-4 hover:text-foreground hover:decoration-solid'
          to={href}
        >
          {title}
        </Link>
      ) : (
        <span className='text-muted-foreground'>{title}</span>
      )}
    </BreadcrumbItem>
  ))

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* className='space-y-4' */}
      <Layout.Body className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Extra Components
          </h1>
        </div>
        <h2 className='text-lg font-bold md:text-xl'>Breadcrumbs</h2>
        <Breadcrumb separator={<IconChevronRight size={18} />}>
          {items}
        </Breadcrumb>
        <Breadcrumb>{items}</Breadcrumb>

        <Separator />
      </Layout.Body>
    </Layout>
  )
}
