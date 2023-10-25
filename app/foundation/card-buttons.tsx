import Play from '/public/icons/system/action-play.svg'
import Edit from '/public/icons/system/action-edit.svg'
import Delete from '/public/icons/system/action-bin.svg'

import Link from 'next/link'
import { cache } from 'react'
import { redirect } from "next/navigation"
import { deleteFoundation } from '@/prisma/scripts/foundation'
import { revalidatePath } from 'next/cache'

export default function CardButtons ({
    id
  }: { 
    id: number
  }) {

    async function del() {
      'use server'

      try {
        const response = await deleteFoundation(id)
      }
      catch (e) {
        return { message: 'Failed to delete' }
      }
  
      revalidatePath('/foundation')
    }

    return (
        <div className="h-1/6 flex flex-row">
          <Link href={'/foundation/add'} className="card-button form-button">
            <Play className="stats-icon"/>
          </Link>
          <Link href={'/foundation/'+id} className="card-button form-button">
            <Edit className="stats-icon"/>
          </Link>
          <form className='w-full' action={del}>
            <button className="card-button form-button" type='submit'>
              <Delete className="stats-icon"/>
            </button>
          </form>
        </div>
    )
}
