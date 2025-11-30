import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import Providers from '../providers/Providers'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'X Clone',
  description: 'X clone'
}


export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body
    >
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}
