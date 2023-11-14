import Link from "next/link"
import React from 'react'
import Logo from '/public/icons/logo.svg'
import { PlayButton } from '../_components/playButton'

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
  
export default function ReferenceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
    <TopNav/>
    <main className='flex flex-col h-full m-2 font-roboto'>{children}</main>
   </>
  )
}
