import { getScenarioExtras } from "@/prisma/scripts/api/scenario/scenario"

import LocationCard from "@/app/cards/locationCard"
import CharacterCard from "../scenario/[id]/characterCard"
import EncounterCard from "../scenario/[id]/encounterCard"

import Party from '/public/icons/sidebar/party.svg'
import Location from '/public/icons/sidebar/location.svg'
import Npc from '/public/icons/sidebar/npc.svg'
import Monster from '/public/icons/sidebar/monster.svg'
import Items from '/public/icons/sidebar/items.svg'
import Magic from '/public/icons/sidebar/magic.svg'
  
export default async function PlayLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const scenario = await getScenarioExtras(18);

  function Sidebar () {
    return (
      <nav className='flex flex-col items-center h-full my-4 me-4 gap-6 w-12 px-1'>
        <Party className="sidebar-icon"/>
        <Location className="sidebar-icon"/>
        <Npc className="sidebar-icon"/>
        <Monster className="sidebar-icon"/>
        <Items className="sidebar-icon"/>
        <Magic className="sidebar-icon"/>
      </nav>
    )
  }
  
  function Aside () {
    return (
      <aside>
        <div className="flex flex-col h-full overflow-clip">
          <div className="flex flex-col gap-2">
            {scenario.characters.map((id) => (
              <CharacterCard key={id.id} id={id.id}/>
            ))}
          </div>
        </div>  
        <div className="h-1/2">
          <div className="flex flex-col gap-2">
            {scenario.locations.map((id) => (
              <LocationCard key={id.id} id={id.id}/>
            ))}
          </div>
        </div>
        <div className="h-1/2">
          <div className="flex flex-col gap-2">
            {scenario.encounters.map((id) => (
              <EncounterCard key={id.id} id={id.id}/>
            ))}
          </div>
        </div>
      </aside>
    )
  }

  return (
    <div className='flex flex-row'>
      {<Sidebar/>}
      {children}
    </div>
  )
}
