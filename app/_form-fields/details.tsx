export default function Details ({
  id, profession, reputation, misfortune, goal, secret, asset, liability
}: { 
  id: string, profession: string, reputation: string, misfortune: string, goal: string, secret: string, asset: string, liability: string
}) {
    return (
      <div className="grow h-fit p-2.5 bg-primary-dark-grey rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-justify capitalize">Details</div>
        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          <div className="text-justify">
            They worked as a <span className="font-bold">{profession}</span> with a <span className="font-bold">{reputation}</span> reputation, until they were <span className="font-bold">{misfortune}</span>. Now they aim to <span className="font-bold">{goal}</span> while hiding they are <span className="font-bold">{secret}</span>. They offer <span className="font-bold">{asset}</span>, but are unfortunately afflicted by <span className="font-bold">{liability}</span>.
          </div>
        </div>
      </div>
    )
}