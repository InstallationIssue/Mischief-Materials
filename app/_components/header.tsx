import Link from "next/link"
import Plus from "/public/icons/system/plus.svg"

export default function Header ({
    title, link
  }: { 
    title: string,
    link: string 
  }) {
    return (
        <div className="flex flex-row w-full justify-between my-2 items-center font-play font-bold text-2xl">
            <p>{title}</p>
            <Link href={link} className="p-2 border rounded-lg">
                <Plus className="aspect-square h-5 cursor-pointer"/>
            </Link>
        </div>
    )
}