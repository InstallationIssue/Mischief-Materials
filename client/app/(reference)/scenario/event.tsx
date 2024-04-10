export default function Event({
  id, name, description
}: {
  id: number, 
  name: string, 
  description: string
}) {
    return (
      <div className="w-full px-2 py-1 bg-primary-dark-grey rounded">
        <p className="font-play">{name}</p>
      </div>
    )
}