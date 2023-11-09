export default async function MultiLineText ({
  id
}: { 
  id: string
}) {
    return (
    <div className="w-full h-24 px-4 py-2.5 bg-gray-800 rounded-lg flex-col justify-start items-start gap-1 inline-flex">
        <div className="capitalize">{id}</div>
        <div className="self-stretch justify-start items-start gap-1 inline-flex">
          <div>Enter</div>
          <div className="grow shrink basis-0">{id}</div>
        </div>
      </div>
    )
}