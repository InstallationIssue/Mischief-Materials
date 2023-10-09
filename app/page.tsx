import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'RiT Home',
}

export default function Page() {
  
  //Temp
  redirect('/foundation')
  //Temp
  
  return (
    <div className='flex flex-row justify-evenly w-full h-5/6 items-center'>
      <Link href='campaign/all' className='rounded-full flex flex-col items-center
      aspect-square w-1/3 m-2 text-center justify-center
      border-2 border-slate-300 bg-opacity-70 bg-vermillion'>
        <Image
          src="/images/note-with-pen.svg"
          alt="Vercel Logo"
          className="w-2/3"
          width={200}
          height={200}
          priority
        />
        <h1 className='absolute font-mono font-bold text-2xl 
        bg-slate-800 bg-opacity-70 rounded-lg p-2'>
          Dungeon Master
        </h1>
      </Link>
      <Link href='character/all' className='rounded-full flex flex-col items-center
      aspect-square w-1/3 bg-teal-800 m-2 text-center justify-center
      border-2 border-slate-300 bg-opacity-70 bg-pale-azure'>
        <Image
          src="/images/sword.svg"
          alt="Vercel Logo"
          className="w-2/3"
          width={200}
          height={200}
          priority
        />
        <h1 className='absolute font-mono font-bold text-2xl 
        bg-slate-800 bg-opacity-70 rounded-lg p-2'>
          Character
        </h1>
      </Link>
    </div>
  )
}