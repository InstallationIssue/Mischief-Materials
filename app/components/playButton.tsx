'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Play from '/public/icons/system/action-play.svg'

export function PlayButton () {

    const [scenario, setScenario] = useState([]);

    useEffect(() => {
        const scenario = JSON.parse(localStorage.getScenario('scenario'));
        if (scenario) {
            setScenario(scenario);
        }
    }, []);

    console.log(scenario)
    
    var play = (<div></div>)
    
    if ("" != ''){
        play = (
            <Link className="flex flex-row items-center rounded-full h-2/3 py-2 px-3 gap-2 bg-secondary-light transition active:text-highlight-light active:fill-highlight-light" href={'/play'}>
            <p className='line-clamp-1 leading-loose'>Ark of Cognizance</p>
            <Play className="h-full"/>
        </Link>
        )
    }
    
    return play
  }