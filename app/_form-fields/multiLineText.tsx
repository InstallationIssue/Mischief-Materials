export default function MultiLineText ({
  id, name
}: { 
  id: string, name: string
}) {
    return (
      <div className="px-4 py-2.5 rounded-lg justify-start items-start gap-1 inline-flex grow font-play bg-primary-dark-grey">
          <label className='grow shrink basis-0 capitalize flex flex-col gap-1 self-stretch justify-start items-start h-full'>
              {id}
              <textarea id={id} name={name} placeholder={`Enter ${id}`} className='bg-transparent w-full h-full resize-none'/>
          </label>
      </div>
    )
}