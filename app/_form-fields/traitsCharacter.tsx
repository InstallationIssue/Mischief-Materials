export default function TraitsCharacter ({
    id, clothing, appearance, physical_detail, personality, mannerism, hobby
}: { 
    id: string, clothing: string, appearance: string, physical_detail: string, personality: string, mannerism: string, hobby: string
}) {
    return (
        <div>
            <div className="w-full h-fit p-2.5 bg-[--primary-dark-grey] rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-justify capitalize">Traits</div>
                <div className="self-stretch justify-start items-start gap-1 inline-flex">
                    <div className="text-justify">
                        Dressed in {clothing} clothing, they are a {appearance} person with {physical_detail}. In person, they are {personality}, recognizable by their {mannerism} or their hobby, {hobby}.
                    </div>
                </div>
            </div>
        </div>
    )
}