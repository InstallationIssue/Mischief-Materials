'use client'
import { useEffect } from "react"
import { useAnimate, stagger } from "framer-motion"

function listAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("cardList", {}, { delay: stagger(0.1) })})
}

export default function CardList ({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row flex-wrap" id="cardList" onLoad={listAnimation}>
            {children}
        </div>
    )
}