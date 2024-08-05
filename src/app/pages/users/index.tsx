import { UserNav } from '@/components/layout/header/user-nav'
import { Layout } from '@/components/layout/layout'
import { FC } from 'react'
import { AllUsers } from './components/all-users'

const Users: FC = () => {
  return (
    <Layout>
      <Layout.Header>
        <div className='ml-auto flex w-full flex-row items-center justify-between gap-2 space-x-6 px-8 pt-2 sm:pt-0 md:flex-row'>
          <span className='text-2xl font-bold tracking-tight'>Users</span>
          <UserNav />
        </div>
      </Layout.Header>
      <Layout.Body>
        <AllUsers />
      </Layout.Body>
    </Layout>
  )
}

export default Users
