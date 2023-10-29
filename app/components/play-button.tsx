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
            <Link className="play" href={'/play'}>
            <h4 className='line-clamp-1 leading-loose'>Ark of Cognizance</h4>
            <Play className="h-full"/>
        </Link>
        )
    }
    
    return play
  }