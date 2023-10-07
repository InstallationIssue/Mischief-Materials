import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from 'next/image'
import Party from '../public/icons/sidebar/party.svg'
import Location from '../public/icons/sidebar/location.svg'
import Npc from '../public/icons/sidebar/npc.svg'
import Monster from '../public/icons/sidebar/monster.svg'
import Items from '../public/icons/sidebar/items.svg'
import Magic from '../public/icons/sidebar/magic.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rats in Transit App',
  description: 'Maze Rats Assistant Web App',
}

function Navigation () {
  return (
    <nav className='
    left-0 top-0 flex w-full border-b items-center justify-between
    border-gray-300 bg-gradient-to-b from-zinc-200 py-2 
    backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 
    dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border 
    lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
      <Link href="/" className='flex flex-row'>
        <Image
          src="/icons/stats/heart.svg"
          alt="RiTs Logo"
          className="title-icon"
          width={50}
          height={50}
          priority
        />
        <h2 className='font-mono font-bold text-4xl'>MRC</h2>
      </Link>
      <div>
        <Link href="/foundation/all" className="font-mono font-bold px-4">Foundations</Link>
        <Link href="/scenario/all" className="font-mono font-bold px-4">Scenarios</Link>
        <Link href="/location/all" className="font-mono font-bold px-4">Locations</Link>
        <Link href="/player/all" className="font-mono font-bold px-4">Players</Link>
        <Link href="/npc/all" className="font-mono font-bold px-4">NPCs</Link>
        <Link href="/monster/all" className="font-mono font-bold px-4">Monsters</Link>
        <Link href="/item/all" className="font-mono font-bold px-4">Items</Link>
        <Link href="/magic/all" className="font-mono font-bold px-4">Magic</Link>
      </div>
    </nav>
  )
}

function Sidebar () {
  return (
    <nav className='flex flex-col w-1/6 ml-2 my-2 h-full gap-2'>  
      <Party className="sidebar-icon"/>
      <Location className="sidebar-icon"/>
      <Npc className="sidebar-icon"/>
      <Monster className="sidebar-icon"/>
      <Items className="sidebar-icon"/>
      <Magic className="sidebar-icon"/>
    </nav>
  )
}

function Aside () {
  return (
    <aside>

    </aside>
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
          <Navigation></Navigation>
          <div className='flex flex-row'>
            <Sidebar></Sidebar>
            {children}
          </div>
        </body>
    </html>
    
  )
}
