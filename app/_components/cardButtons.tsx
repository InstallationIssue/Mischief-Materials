'use client'

import Play from '/public/icons/system/play.svg'
import Edit from '/public/icons/system/edit.svg'
import Delete from '/public/icons/system/delete.svg'

import { redirect } from 'next/navigation'

/*
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
*/

export default function CardButtons ({
    id
  }: { 
    id: number
  }) {
    
    function playItem () {
      redirect('/play')
    }

    function editItem () {
      redirect(`/scenario/${id}`)
    }

    function deleteItem () {}

    return (
        <div className="flex flex-row h-10 w-full justify-between">
          <button onClick={playItem} className='flex h-full w-full items-center justify-center'>
            <Play className="h-5 aspect-square stroke-1 stroke-primary-dark"/>
          </button>
          <button onClick={editItem} className='flex h-full w-full items-center justify-center'>
            <Edit className="h-5 aspect-square"/>
          </button>
          <button onClick={deleteItem} className='flex h-full w-full items-center justify-center'>
            <Delete className="h-5 aspect-square"/>
          </button>
        </div>
    )
}
