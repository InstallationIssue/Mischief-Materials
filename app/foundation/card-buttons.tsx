import Play from '/public/icons/system/action-play.svg'
import Edit from '/public/icons/system/action-edit.svg'
import Delete from '/public/icons/system/action-bin.svg'

import { redirect } from "next/navigation"
import { deleteFoundation } from "@/app/api/route"
import { revalidatePath } from 'next/cache'

export default function CardButtons ({
    id
  }: { 
    id: number
  }) {

    async function play () {
      'use server'
      console.log("done")
    }

    async function edit () {
      'use server'
      redirect('foundation/'+(id))
    }

    async function del() {
      'use server'
      try {
        const response = deleteFoundation(id)
      }
      catch (e) {
        return { message: 'Failed to delete' }
      }

      revalidatePath('/')
    }

    return (
        <div className="h-1/6 flex flex-row">
          <form className='w-full' action={play}>
            <button className="card-button form-button" type='submit'>
              <Play className="stats-icon"/>
            </button>
          </form>
          <form className='w-full' action={edit}>
            <button className="card-button form-button" type='submit'>
              <Edit className="stats-icon"/>
            </button>
          </form>
          <form className='w-full' action={del}>
            <button className="card-button form-button" type='submit'>
              <Delete className="stats-icon"/>
            </button>
          </form>
        </div>
    )
}
