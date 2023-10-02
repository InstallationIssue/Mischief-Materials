import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from 'next/image'

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
            src="/icons/home.svg"
            alt="RiTs Logo"
            className="border border-white rounded-full w-10 h-10 mx-4 bg-white"
            width={50}
            height={50}
            priority
          />
          <h2 className='font-mono font-bold text-4xl'>MRC</h2>
        </Link>
        <div>
          <Link href="foundation/all" className="font-mono font-bold px-4">Foundations</Link>
          <Link href="scenario/all" className="font-mono font-bold px-4">Scenarios</Link>
          <Link href="location/all" className="font-mono font-bold px-4">Locations</Link>
          <Link href="player/all" className="font-mono font-bold px-4">Players</Link>
          <Link href="npc/all" className="font-mono font-bold px-4">NPCs</Link>
          <Link href="monster/all" className="font-mono font-bold px-4">Monsters</Link>
          <Link href="item/all" className="font-mono font-bold px-4">Items</Link>
          <Link href="magic/all" className="font-mono font-bold px-4">Magic</Link>
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
        <body className={inter.className} id='background'>
          <Navigation></Navigation>
          {children}
        </body>
    </html>
    
  )
}
