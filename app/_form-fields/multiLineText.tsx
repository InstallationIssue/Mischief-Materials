export default function MultiLineText ({
  id, name
}: { 
  id: string, name: string
}) {
    return (
      <div className="px-4 py-2.5 bg-[--primary-dark-grey] rounded-lg justify-start items-center gap-1 inline-flex self-stretch font-play bg-primary-dark-grey">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <label className='grow shrink basis-0 capitalize flex flex-col gap-1 self-stretch justify-start items-start '>
              {id}
              <input type="text" id={id} name={name} placeholder={`Enter ${id}`} className='bg-transparent w-full resize-none'/>
          </label>
      </div>
  </div>
    )
}