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
        <Image
          src="/images/androidhols.svg"
          alt="Vercel Logo"
          className="bg-black border border-white rounded-full w-10 h-10 mx-4"
          width={50}
          height={50}
          priority
        />
        <div>
          <Link href="/" className="font-mono font-bold px-4">Home</Link>
          <Link href="characters" className="font-mono font-bold px-4">Characters</Link>
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
