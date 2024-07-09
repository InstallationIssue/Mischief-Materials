import { getCharacterById } from "@/prisma/scripts/character"
import ItemCard from "@/app/(reference)/item/itemCard";

import TraitsCharacter from "@/app/_form-fields/traitsCharacter";
import Details from "@/app/_form-fields/details";

import Scenario from '/public/icons/locations/scenario.svg'
import Items from '/public/icons/items/items.svg'
import Magic from '/public/icons/magic/magic.svg'

import HealthCircle from "@/app/_components/vitality";

import Strength from '/public/icons/stats/strength.svg'
import Dexterity from '/public/icons/stats/dexterity.svg'
import Willpower from '/public/icons/stats/willpower.svg'
import Attack from '/public/icons/stats/attack.svg'

export default async function Character({ 
    params 
}: { 
    params: { id: number } 
}) {
    const character = await getCharacterById(Number(params.id));

    return (
        <div className="w-full h-full flex flex-col gap-2">
            <div className="flex flex-grow justify-center items-start self-stretch gap-2">
                    <HealthCircle
                        health_max={character.health_max}
                        health_lost={character.health_lost}
                        armor={character.armor}/>
                    <div className="flex flex-grow self-stretch justify-between h-12 items-center">
                        <p className="font-play text-clip text-3xl">{character.name}</p>
                        <div className="flex items-center gap-6">
                            <div className='flex flex-row gap-2 items-center'>
                                <Strength className='aspect-square h-10 fill-primary-light cursor-pointer'/>
                                <p className="font-play text-3xl font-bold">{character.str}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Dexterity className='aspect-square h-10 fill-primary-light cursor-pointer'/>
                                <p className="font-play text-3xl font-bold">{character.dex}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Willpower className='aspect-square h-9 fill-primary-light cursor-pointer'/>
                                <p className="font-play text-3xl font-bold">{character.wil}</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center'>
                                <Attack className='aspect-square h-9 fill-primary-light cursor-pointer'/>
                                <p className="font-play text-3xl font-bold">{character.att}</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="flex flex-row border w-full h-full rounded-lg overflow-clip">
                <div className="flex flex-col w-1/2 border border-y-0 border-s-0">
                    <div className="h-3/5 w-full bg-primary-grey flex items-center justify-center">
                        <p className="font-play font-bold text-2xl">Portrait</p>
                    </div>
                    <div className="w-full flex flex-col grow px-2 border border-x-0 border-b-0">
                        <p className="font-play font-bold text-lg">Backstory</p>
                        <p>{character.background}</p>
                    </div>
                </div>
                <div className="flex flex-col w-1/2 px-2">
                    <p className="font-play font-bold text-lg">Traits</p>
                    <TraitsCharacter id={""} clothing={character.clothing} appearance={character.appearance} physical_detail={character.physical_detail} personality={character.personality} mannerism={character.mannerism} hobby={character.hobbies}/>
                    <p className="font-play font-bold text-lg">Details</p>
                    <Details id={""} profession={""} reputation={character.reputations} misfortune={character.misfortunes} goal={character.goals} secret={character.secrets} asset={character.assets} liability={character.liabilities}/>
                </div>
            </div>
            <div className="flex flex-row justify-between bottom-0 w-full font-play text-xl h-10">
            <span className="py-1 w-[19%] flex justify-center bg-secondary-light rounded-lg border">
                <p className="hidden sm:inline">Inventory</p>
                <Items className='sm:hidden h-full'/>
            </span>
            <span className="py-1 w-[19%] flex justify-center bg-secondary-light rounded-lg border">
                <p className="hidden sm:inline">Magic</p>
                <Magic className='sm:hidden h-full'/>
            </span>
            <span className="py-1 w-[19%] flex justify-center bg-secondary-light rounded-lg border">
                <p className="hidden sm:inline">Missions</p>
                {/*<Monster className='sm:hidden h-full'/>*/}
            </span>
            <span className="py-1 w-[19%] flex justify-center bg-secondary-light rounded-lg border">
                <p className="hidden sm:inline">Relations</p>
                {/*<Items className='sm:hidden h-full'/>*/}
            </span>
            <span className="py-1 w-[19%] flex justify-center bg-secondary-light rounded-lg border">
                <p className="hidden sm:inline">Scenarios</p>
                <Scenario className='sm:hidden h-full'/>
            </span>
            </div>
        </div>
    )
}