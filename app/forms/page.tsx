import AddScenario from "./scenarioAdd";
import AddLocation from "./locationAdd";
import AddMonster from "./monsterAdd";
import AddCharacter from "./characterAdd";
import AddItem from "./itemAdd";

export default async function forms () {
    return (
    <div className="flex flex-col">
        <AddItem/>
    </div>
    )
}