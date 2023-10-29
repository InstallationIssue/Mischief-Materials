import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RiTs Home',
}

export default function Page() {
  process.title = 'RiTs Home'

  return (
    <div className='flex flex-col items-center w-full'>
      <span className='flex flex-row w-full justify-center'>
        <h1>Rats in Transit</h1>
      </span>
      <p className='w-2/3'>Welcome to my Rats in Transit Web app. This is designed to be a companion app to the table top game maze rats. Please choose either of the options below to begin playing</p>
      <div className='flex flex-row justify-center w-full items-center my-4'>
        <Link href='/scenario' className=' rounded-s-full flex flex-col items-center h-40 text-center justify-center border-2 border-slate-300 bg-opacity-70 bg-vermillion px-4'>
          <h2>
            Dungeon Master
          </h2>
        </Link>
        <Link href='/character' className='rounded-e-full flex flex-col items-center h-40 bg-teal-800 text-center justify-center border-2 border-slate-300 border-s-0 bg-opacity-70 bg-pale-azure px-4'>
          <h2>
            Character
          </h2>
        </Link>
      </div>
    </div>
  )
}