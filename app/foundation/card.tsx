import Image from "next/image"
import Link from "next/link"
import CardButtons from "./card-buttons"

export default async function Card({
    id, name, setting
  }: {
    id: number, name: string, setting: string
  }) {

    return (
      <div className="flex flex-col border rounded-lg w-64 h-80 overflow-clip m-4">
        <Link href={`/foundation/${id}`} className="flex flex-col flex-grow">
          <div className="flex-grow relative">
            <Image 
            src="/images/death-valley.webp"
            fill={true}
            sizes="(max-width: 256px) 100vw"
            priority={true}
            placeholder="empty"
            quality={25}
            alt="Picture of the author"/>
          </div>
          <h3 className="h-1/5 scrolling-text capitalize px-2 text-center">{name}</h3>
        </Link>
        <CardButtons id={id}/>
      </div>
    )
}