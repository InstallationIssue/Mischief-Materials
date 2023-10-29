import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RiTs Home',
}

export default function Page() {
  process.title = 'RiTs Home'

  return (
    <div className='flex flex-row justify-evenly w-full h-5/6 items-center'>
      <Link href='campaign/all' className='rounded-full flex flex-col items-center aspect-square w-1/3 m-2 text-center justify-center border-2 border-slate-300 bg-opacity-70 bg-vermillion'>
        <h1 className='absolute bg-slate-800 bg-opacity-70 rounded-lg p-2'>
          Dungeon Master
        </h1>
      </Link>
      <Link href='character/all' className='rounded-full flex flex-col items-center aspect-square w-1/3 bg-teal-800 m-2 text-center justify-center border-2 border-slate-300 bg-opacity-70 bg-pale-azure'>
        <h1 className='absolute bg-slate-800 bg-opacity-70 rounded-lg p-2'>
          Character
        </h1>
      </Link>
    </div>
  )
}