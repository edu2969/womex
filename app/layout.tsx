import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Womex',
  description: 'by Eduardo Troncoso',
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (    
    <html lang="en">      
      <body className={inter.className}>      
        <div className="mt-14">{children}</div>
        <Nav user={session?.user}></Nav>      
      </body>
    </html>
  )
}