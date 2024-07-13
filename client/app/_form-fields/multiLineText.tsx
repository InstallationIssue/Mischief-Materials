export default function MultiLineText ({
  id, name
}: { 
  id: string, name: string
}) {
    return (
      <div className="px-4 py-2.5 rounded-lg justify-start items-start gap-1 inline-flex grow font-header bg-primary-dark-grey w-full">
          <label className='grow shrink basis-0 capitalize flex flex-col-reverse gap-1 self-stretch justify-end items-start h-48'>
              <textarea id={id} name={name} placeholder={`Enter ${id}`} className='bg-transparent w-full h-44 resize-none peer focus:outline-none'/>
              <p className="peer-focus:text-sm">{id}</p>
          </label>
      </div>
    )
}