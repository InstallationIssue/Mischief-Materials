'use client'

import Chevron from "/public/icons/system/chevron-down.svg"

export default function Filter () {
    return (
        <div className="w-fit h-11 py-2 px-3 bg-primary-dark-grey rounded-lg justify-center items-center flex text-lg font-normal gap-2">
            <p className="capitalize whitespace-nowrap hidden sm:inline font-header grow">Order</p>
            <span>
                <Chevron className='h-5 fill-primary-light'/>
            </span>
        </div>
    )
}


