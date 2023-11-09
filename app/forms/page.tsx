import AddScenario from "./scenarioAdd";
import AddLocation from "./addLocation";
// Encounter
import AddMonster from "./addMonster";
import AddItem from "./addItem";
// Magic
// Spell
// Relationship
import AddCharacter from "./addCharacter";
import Divider from "../components/divider";

export default async function forms () {
    return (
    <div className="flex flex-col">
        {/*<AddScenario/>
        <Divider/>
        <AddLocation/>
        <Divider/>
        <AddMonster/>
        <Divider/>
        <AddItem/>
        <Divider/>*/}
        <AddCharacter/>
    </div>
    )
}