import AddScenario from "../(reference)/scenario/addScenario";
import AddLocation from "../(reference)/location/addLocation";
// Encounter
import AddMonster from "../(reference)/monster/addMonster";
import AddItem from "../(reference)/item/addItem";
// Magic
// Spell
// Relationship
import AddCharacter from "../(reference)/character/add/page";

import Link from "next/link";

export default function forms () {
    return (
    <div className="flex flex-col">
        <Link className="bg-secondary-light" href="/intercept">
            Go to intercept
        </Link>
        {/*<AddScenario/>*/}
        <AddLocation/>
        {/*<AddMonster/>
        <AddItem/>*/}
        <AddCharacter/>
    </div>
    )
}