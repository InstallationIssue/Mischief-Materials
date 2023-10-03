import { getFoundationById } from "@/prisma/scripts/foundation"

export default async function Foundation({
    params 
  }: { 
    params: { id: number } 
  }) {
    const data = await getFoundationById(Number(params.id))

    return (
        <main className="main flex flex-col items-start gap-2.5 self-stretch p-2">
            <div className="flex items-center gap-2.5 self-stretch p-2 text-[#f2f5ea] font-['Newsreader'] text-[2rem] font-medium leading-[normal]">
                {data.name}
            </div>
            <div className="content flex flex-col items-start gap-5 self-stretch">
                <div className="narrative flex items-start gap-5 self-stretch">
                    <div className="3rd flex flex-col items-start gap-2.5 self-stretch rounded-[0.625rem]">
                        <div className="frame_6 flex flex-col items-start gap-2.5 self-stretch p-2 rounded-[0.625rem] border border-[#f2f5ea]">
                            <div className="text-[#f2f5ea] font-['Newsreader'] text-2xl font-semibold leading-[normal]">
                                Scenarios
                            </div>
                            <div className="w-[437.333px] h-px bg-[#f2f5ea]" />
                            <div className="self-stretch overflow-hidden text-[#f2f5ea] text-justify font-['Inter'] text-xl leading-[normal]">Act 1: Eufrasio Falls
                                Act 2: Race to the Buds - Nomad Appears
                                Act 3: Heist of Amba HQ
                                Act 4: Actaeon Embarks
                            </div>
                        </div>
                        <div className="frame_7 flex flex-col items-start gap-2.5 self-stretch p-2 rounded-[0.625rem] border border-[#f2f5ea]">
                            <div className="text-[#f2f5ea] font-['Newsreader'] text-2xl font-semibold leading-[normal]">
                                Story Hooks
                            </div>
                            <div className="w-[437.333px] h-px bg-[#f2f5ea]" />
                            <div className="self-stretch overflow-hidden text-[#f2f5ea] text-justify font-['Inter'] text-xl leading-[normal]">
                                Eufrasio’s Affliction
                                Motivations of the Impulse Drones
                                Lucretia's Obsession
                                Dregs of gold
                                Living Anachronism/ Man out of time
                                Artefacts of the Old World
                                Secret of the Mosswolves
                            </div>
                        </div>
                    </div>
                    <div className="3rd-1 flex flex-col items-start gap-2.5 self-stretch p-2 rounded-[0.625rem] border border-[#f2f5ea]">
                        <div className="text-[#f2f5ea] font-['Newsreader'] text-2xl font-semibold leading-[normal]">
                            Setting
                        </div>
                        <div className="w-[437.333px] h-px bg-[#f2f5ea]" />
                        <div className="self-stretch overflow-hidden text-[#f2f5ea] text-justify font-['Inter'] text-xl leading-[normal]">
                            {data.setting}
                        </div>
                    </div>
                    <div className="3rd-2 flex flex-col items-start gap-2.5 self-stretch p-2 rounded-[0.625rem] border border-[#f2f5ea]">
                        <div className="text-[#f2f5ea] font-['Newsreader'] text-2xl font-semibold leading-[normal]">
                            Story So Far
                        </div>
                        <div className="w-[437.333px] h-px bg-[#f2f5ea]" />
                        <div className="self-stretch overflow-hidden text-[#f2f5ea] text-justify font-['Inter'] text-xl leading-[normal]">Eufrasio has fallen ill
                            Lichen offered to trade medicine if you can bring him some Aes buds
                            The crew sets off for Khonsu's Landing
                            After travelling for a time through the wind stricken streets of Zephyr and avoiding the dust devils, the crew reaches arid fields&nbsp;
                            Here they are attacked by a flock of Lencers but Mehmet drives them away with a dispersed cloud of dehydrated urine
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}