import AddScenario from "./addScenario";
import AddLocation from "./addLocation";
// Encounter
import AddMonster from "./addMonster";
import AddItem from "./addItem";
// Magic
// Spell
// Relationship
import AddCharacter from "./addCharacter";
import Divider from "../_components/divider";

import Modal from "../_components/modal";
import Link from "next/link";

export default function forms () {
    return (
    <div className="flex flex-col">
        <Link className="bg-secondary-light" href="/intercept">
            Go to intercept
        </Link>
        {/*<AddScenario/>
        <Divider/>*/}
        <AddLocation/>
        <Divider/>
        {/*<AddMonster/>
        <Divider/>
        <AddItem/>
        <Divider/>*/}
        <AddCharacter/>
    </div>
    )
}