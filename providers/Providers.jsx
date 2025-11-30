'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {UserProvider, useUser} from '../context/UserContext'
import Header from '../components/Header'
import RightSide from '../components/RightSide'
import Loader from '../components/Loader'

const queryClient = new QueryClient()

export default function Providers({children}) {

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>

        <InnerLayout>
          {children}
        </InnerLayout>

      </UserProvider>
    </QueryClientProvider>
  )
}

function InnerLayout({children}) {
  const {user, loading} = useUser()

  if (loading) {
    return <Loader />
  }

  return (
    <div
      className={`max-w-[1240px] mx-auto px-1 sm:px-3 lg:px-5
         ${!user ? 'flex items-center justify-center'
        : 'flex flex-col gap-1 sm:grid sm:gap-2 lg:gap-3 xl:gap-5 sm:grid-cols-[72px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[200px_1fr_350px]'} `}
    >
      {user && <Header />}
      {children}
      {user && <RightSide />}
    </div>
  )
}
