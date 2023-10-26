import Play from '/public/icons/system/action-play.svg'
import Edit from '/public/icons/system/action-edit.svg'
import Delete from '/public/icons/system/action-bin.svg'

import Link from 'next/link'
import { cache } from 'react'
import { redirect } from "next/navigation"
import { deleteScenario } from '@/prisma/scripts/scenario'
import { revalidatePath } from 'next/cache'

export default function CardButtons ({
    id
  }: { 
    id: number
  }) {

    async function del() {
      'use server'

      try {
        const response = await deleteScenario(id)
      }
      catch (e) {
        return { message: 'Failed to delete' }
      }
  
      revalidatePath('/scenario')
    }

    return (
        <div className="flex flex-row flex-grow">
          <Link href={'/scenario/add'} className="card-button form-button">
            <Play className="card-icon"/>
          </Link>
          <Link href={'/scenario/'+id} className="card-button form-button">
            <Edit className="card-icon"/>
          </Link>
          <form className='w-full' action={del}>
            <button className="card-button form-button" type='submit'>
              <Delete className="card-icon"/>
            </button>
          </form>
        </div>
    )
}
