export default async function Details ({
  id, profession, reputation, misfortune, goal, secret, asset, liability
}: { 
  id: string, profession: string, reputation: string, misfortune: string, goal: string, secret: string, asset: string, liability: string
}) {
    return (
        <div className="w-full h-32 p-2.5 bg-gray-800 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="text-justify capitalize">Details</div>
        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          <div className="text-justify">
            They worked as a {profession} waith a {reputation} reputation, until they were {misfortune}. Now they aim to {goal} while hiding they are {secret}. They offer {asset}, but are unfortunately afflicted by {liability}.
          </div>
        </div>
        </div>
    )
}