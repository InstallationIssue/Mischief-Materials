export default function TraitsCharacter ({
    id, clothing, appearance, physical_detail, personality, mannerism, hobby
}: { 
    id: string, clothing: string, appearance: string, physical_detail: string, personality: string, mannerism: string, hobby: string
}) {
    return (
        <div>
            <div className="grow h-fit p-2.5 bg-primary-dark-grey rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-justify capitalize">Traits</div>
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="text-justify">
                        Dressed in <span className="font-bold">{clothing}</span> clothing, they are a <span className="font-bold">{appearance}</span> person with <span className="font-bold">{physical_detail}</span>. In person, they are <span className="font-bold">{personality}</span>, recognizable by their <span className="font-bold">{mannerism}</span> or their hobby, <span className="font-bold">{hobby}</span>.
                    </div>
                </div>
            </div>
        </div>
    )
}