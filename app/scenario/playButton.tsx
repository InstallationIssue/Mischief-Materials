'use client'

import { redirect } from 'next/navigation'
import Play from '/public/icons/system/action-play.svg'

export default function PlayButton ({
    id
  }: { 
    id: number
  }) {
    
    function setPlay () {
        redirect('/play')
    }
    /*
      const [scenario, setScenario] = useState([]);

        useEffect(() => {
        localStorage.setItem('scenario', JSON.stringify(scenario));
    }, [scenario]);
    }
    */

    return (
          <button onClick={setPlay} className="card-button form-button">
            <Play className="card-icon"/>
          </button>
    )
}
