export default function Thread({
  id, name, description
}: {
  id: number, 
  name: string, 
  description: string
}) {
    return (
      <div className="w-full px-2 py-1 bg-primary-grey rounded">
        <p className="font-header">{name}</p>
      </div>
    )
}