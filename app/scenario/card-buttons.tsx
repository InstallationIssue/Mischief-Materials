import Edit from '/public/icons/system/action-edit.svg'
import Delete from '/public/icons/system/action-bin.svg'

import { useState, useEffect } from 'react'
import { FormStatus } from 'react-dom'
import Link from 'next/link'
import { deleteScenario } from '@/prisma/scripts/scenario'
import { z } from "zod"
import { revalidatePath } from 'next/cache'
import PlayButton from './playButton'
import { redirect } from 'next/navigation'

const schema = z.object({
  id: z.string()
})

export default function CardButtons ({
    id
  }: { 
    id: number
  }) {

    async function deleteItem(formData: FormData) {
      'use server'
      
      const parsed = schema.parse({
        id: formData.get('id')
      })

      try {
        const response = await deleteScenario(Number(parsed.id))
        console.log("response")
      }
      catch (e) {
        return { message: 'Failed to delete' }
      }

      return revalidatePath('/scenario');
    }

    return (
        <div className="flex flex-row flex-grow">
          <PlayButton id={id}/>
          <Link href={'/scenario/'+id} className="card-button form-button">
            <Edit className="card-icon"/>
          </Link>
          <form action={deleteItem} className='w-full'>
            <input type="hidden" name="id" value={id} />
            <button className="card-button form-button">
              <Delete className="card-icon"/>
            </button>
          </form>
        </div>
    )
}
