import Header from "./header"
import Characteristics from "./characteristics"
import Background from "./background"
import Inventory from "./inventory"
import Image from "next/image"

export default function Character(){
    return (
        <main className="flex flex-col justify-around">
            <Header></Header>
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
                    <Characteristics/>
                </div>
                <div className="flex-grow m-2 w-1/3">
                    <Background/>
                </div>
            </div>
            <div className="flex-grow m-2 h-fit">
                <Inventory/>
            </div>
        </main>
    )
}