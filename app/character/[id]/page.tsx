import Header from "../header"
import Background from "../background"
import Inventory from "../inventory"
import Image from "next/image"

export default function Character({ 
    params 
}: { 
    params: { id: number } 
}) {
    return (
        <main className="flex flex-col justify-around">
            <Header id={Number(params.id)}/>
            <div className="flex flex-row">
                <div className="flex-grow m-2 w-1/3">
                    <Image
                        src="/images/androidhols.svg"
                        alt="Vercel Logo"
                        className="bg-white border border-white rounded-lg w-full"
                        width={50}
                        height={50}
                        priority/>
                </div>
                <div className="flex-grow m-2 w-1/3">
                </div>
                <div className="flex-grow m-2 w-1/3">
                    <Background id={Number(params.id)}/>
                </div>
            </div>
            <div className="flex-grow m-2 h-fit">
                <Inventory/>
            </div>
        </main>
    )
}