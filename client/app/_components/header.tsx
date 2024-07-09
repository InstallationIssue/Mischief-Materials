import Link from "next/link"
import Plus from "/public/icons/system/plus.svg"
import SearchFilterBar from "./searchFilterBar"

export default function Header ({
    title, link
  }: { 
    title: string,
    link: string 
  }) {
    return (
        <div className="flex flex-row w-full justify-between p-2 items-center">
            <p className="font-play font-bold text-2xl w-32">{title}</p>
            <SearchFilterBar/>
            <Link href={link} className="p-2 border rounded-lg">
                <Plus className="aspect-square h-5 cursor-pointer fill-primary-light"/>
            </Link>
        </div>
    )
}