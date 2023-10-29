'use client'

import Play from '/public/icons/system/action-play.svg'
import Edit from '/public/icons/system/action-edit.svg'
import Delete from '/public/icons/system/action-bin.svg'

import { useState, useEffect } from 'react'
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

    /*
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
    */

    
    function setPlay () {}
    /*
      const [scenario, setScenario] = useState([]);

        useEffect(() => {
        localStorage.setItem('scenario', JSON.stringify(scenario));
    }, [scenario]);
    }
    */

    return (
        <div className="flex flex-row flex-grow">
          <button onClick={setPlay} className="card-button form-button">
            <Play className="card-icon"/>
          </button>
          <Link href={'/scenario/'+id} className="card-button form-button">
            <Edit className="card-icon"/>
          </Link>
          <button className="card-button form-button">
            <Delete className="card-icon"/>
          </button>
        </div>
    )
}
