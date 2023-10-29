import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import React from 'react'
import Logo from '/public/icons/logo.svg'
import Play from '/public/icons/system/action-play.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rats in Transit',
  description: 'Maze Rats Assistant'
}

function TopNav () {
  return (
    <nav className='flex flex-row justify-between items-center px-2 h-12 border-b-2 border-white'>
      <Link className='nav-link' href={'/'}>
        <Logo className="w-8"/>
      </Link>

      <Link className="play" href={'/play'}>
        <h4 className='line-clamp-1 leading-loose'>Ark of Cognizance</h4>
        <Play className="h-full"/>
      </Link>

      <div className='flex flex-row items-center h-full'>
        <Link href="/scenario" className="nav-link">Scenarios</Link>
        <Link href="/location" className="nav-link">Locations</Link>
        <Link href="/character" className="nav-link">Characters</Link>
        <Link href="/monster" className="nav-link">Monsters</Link>
        <Link href="/item" className="nav-link">Items</Link>
        <Link href="/magic" className="nav-link">Magic</Link>
      </div>
    </nav>
  )
}
  
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <TopNav/>
          <main className='flex flex-col h-full mx-4'>{children}</main>
        </body>
    </html>
  )
}
