import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from 'next/image'
import Logo from '/public/icons/logo.svg'
import Party from '/public/icons/sidebar/party.svg'
import Location from '/public/icons/sidebar/location.svg'
import Npc from '/public/icons/sidebar/npc.svg'
import Monster from '/public/icons/sidebar/monster.svg'
import Items from '/public/icons/sidebar/items.svg'
import Magic from '/public/icons/sidebar/magic.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rats in Transit App',
  description: 'Maze Rats Assistant Web App',
}

function Sidebar () {
  return (
    <nav className='flex flex-col items-center w-20 my-2 h-full gap-2'>
      <h1 className='title'>RiT</h1>
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
          <div className='flex flex-row'>
            <Sidebar/>
            <main>{children}</main>
          </div>
        </body>
    </html>
  )
}
