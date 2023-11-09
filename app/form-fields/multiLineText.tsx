export default async function MultiLineText ({
  id
}: { 
  id: string
}) {
    return (
        <div className="w-full h-full px-4 py-2.5 bg-[--primary-dark-grey] rounded-lg flex-col justify-start items-start gap-1 inline-flex">
          <div className="capitalize">{id}</div>
          <div className="self-stretch justify-start items-start gap-1 inline-flex">
            <div>Enter</div>
            <div className="grow shrink basis-0">{id}</div>
          </div>
        </div>
    )
}