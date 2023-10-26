import Link from "next/link"

export default async function LocationCard({
    params
  }: {
    params: {
      id: number, 
      name: string, 
      description: string,
      color: string,
      icon: string
  }}) {

    return (
      <div>
        <Link href={`/location/${params.id}`} className="flex flex-row border rounded p-1 gap-2">
          <h4>{params.name}</h4>
          <p>{params.description}</p>
        </Link>
      </div>
    )
}