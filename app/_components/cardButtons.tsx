'use client'

import Play from '/public/icons/system/play.svg'
import Edit from '/public/icons/system/edit.svg'
import Delete from '/public/icons/system/delete.svg'
import { PlayContext } from '../(reference)/playContext'
import { useContext } from 'react'
import { redirect } from 'next/navigation'

export default function CardButtons ({
    id, name, image
  }: { 
    id: number, name: string, image: string
  }) {

    const {playChoice, setPlayChoice} = useContext(PlayContext)
    
    function playItem () {
      setPlayChoice({name, image})
      console.log(playChoice)
    }

    function editItem () {
      redirect(`/scenario/${id}`)
    }

    function deleteItem () {}

    return (
        <div className="flex flex-row h-10 w-full justify-between"> 
          <button onClick={playItem} className='flex h-full w-full items-center justify-center active:fill-highlight-light'>
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
