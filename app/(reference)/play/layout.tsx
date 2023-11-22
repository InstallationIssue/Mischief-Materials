import { getScenarioExtras } from "@/prisma/scripts/scenario"

import LocationCard from "@/app/(reference)/location/locationCard"
import CharacterCard from "../scenario/[id]/characterCard"
import EncounterCard from "../scenario/[id]/encounterCard"

import Party from '/public/icons/beings/party.svg'
import Location from '/public/icons/locations/location.svg'
import Npc from '/public/icons/beings/npc.svg'
import Monster from '/public/icons/beings/monster.svg'
import Items from '/public/icons/items/items.svg'
import Magic from '/public/icons/magic/magic.svg'
  
export default async function PlayLayout({
  children, modal
}: {
  children: React.ReactNode, modal: React.ReactNode
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
    <main className='flex flex-row'>
      {<Sidebar/>}
      {children}
    </main>
  )
}
