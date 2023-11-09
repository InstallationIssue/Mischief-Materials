export default async function TraitsMonster ({
    id, personality, tactic, weakness
}: { 
    id: string, personality: string, tactic: string, weakness: string
}) {
    return (
        <div className="w-full h-24 p-2.5 bg-gray-800 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-justify capitalize">Traits</div>
            <div className="self-stretch justify-start items-start gap-1 inline-flex">
                <div className="text-justify">
                    A {personality} creature, they tend to {tactic} when attacked or hunting its prey. {weakness} can be used to fend them off or weaken them
                </div>
            </div>
        </div>
    )
}