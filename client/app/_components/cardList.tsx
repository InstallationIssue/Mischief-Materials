'use client'
import { useEffect } from "react"
import { useAnimate, stagger} from "framer-motion"

export default function CardList ({ children }: { children: React.ReactNode }) {

    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate("div", { opacity: 1 }, { delay: stagger(0.01) })
    })

    return (
        <div className="flex flex-row flex-wrap" id="cardList" ref={scope}>
            {children}
        </div>
    )
}