import Level from "../components/level"
import Armor from "../components/armor"
import HealthCircle from "../components/vitality"

export default async function VitalityLevel ({
    id
}: { 
    id: string
}) {
    return (
        <div>
            <div className="w-64 h-36 p-2.5 bg-[--primary-dark-grey] rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch grow shrink basis-0 justify-between items-start inline-flex">
                    <Armor/>
                    <HealthCircle params={{
                        health_max: 0,
                        health_lost: 0,
                        armor: 0,
                        dimensions: 90
                    }}/>
                    <Level/>
                </div>
            </div>
        </div>
    )
}


