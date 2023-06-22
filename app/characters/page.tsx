import Header from "../character/header"

export default function Character(){
    return (
        <main className="flex flex-col justify-around">
            <h1 className="font-mono font-bold text-3xl px-5 py-2">Available Characters</h1>
            <Header></Header>
            <Header></Header>
            <Header></Header>
            <Header></Header>
        </main>
    )
}