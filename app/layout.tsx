import './globals.css'
import { Roboto, Play, Notable, Libre_Barcode_39_Text } from 'next/font/google'
import Link from "next/link"
import React from 'react'
import Logo from '/public/icons/logo.svg'
import { PlayButton } from './components/playButton'

const roboto = Roboto({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto'
})

const play = Play({
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-play'
})

const notable = Notable({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-notable'
})

const libre = Libre_Barcode_39_Text({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-libre'
})

function TopNav () {
  return (
    <nav className='flex flex-row justify-between items-center px-2 h-12 border-b-2 border-white'>
      <Link className='h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light' href={'/'}>
        <Logo className="w-8 dark:fill-primary-light"/>
      </Link>
      
      <div className='flex flex-row items-center h-full'>
        <Link href="/scenario" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Scenarios</Link>
        <Link href="/location" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Locations</Link>
        <Link href="/character" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Characters</Link>
        <Link href="/monster" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Monsters</Link>
        <Link href="/item" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Items</Link>
        <Link href="/magic" className="h-full px-4 flex items-center transition hover:shadow-none hover:bg-gradient-to-t from-transparent to-secondary-light focus:bg-gradient-to-t active:fill-highlight-light active:text-highlight-light font-play text-xl">Magic</Link>
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
        <body className={`flex flex-col text-primary-dark dark:fill-primary-light dark:text-primary-light dark:bg-primary-dark ${roboto.variable} ${play.variable} ${notable.variable} ${libre.variable}`}>
          <TopNav/>
          <main className='flex flex-col h-full m-2 font-roboto'>{children}</main>
        </body>
      </html>
  )
}
