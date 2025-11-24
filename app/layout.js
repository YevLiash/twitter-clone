'use client'

import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Header from '../components/Header'
import RightSide from '../components/RightSide'
import {UserProvider} from '../context/UserContext'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

// export const metadata = {
//   title: 'X Clone',
//   description: 'X clone'
// }

const queryClient = new QueryClient()

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body
      className="max-w-[1240px] mx-auto px-5 flex flex-col sm:grid gap-2 lg:gap-3 xl:gap-5 sm:grid-cols-[72px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[200px_1fr_350px]"
    >
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Header />
        {children}
        <RightSide />
      </UserProvider>
    </QueryClientProvider>
    </body>
    </html>
  )
}
