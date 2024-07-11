'use client'

import { ChangeEvent, useState } from "react"
import SearchIcon from "/public/icons/system/search.svg"

export default function Search () {
    const [searchTerm, setSearchTerm] = useState('Search...')

    function findTerm(e: ChangeEvent){
        setSearchTerm('')
    }

    return (
        <div className="py-2 px-3 justify-start items-center gap-2.5 flex flex-row grow bg-primary-dark-grey rounded-lg">
            <SearchIcon className='fill-primary-light h-5'/>
            <input onChange={findTerm} id="search" name="search" type="text" placeholder="Search..." className="font-header font-normal text-lg capitalize bg-transparent"/>
        </div>
    )
}


