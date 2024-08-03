import AddScenario from "../(reference)/scenario/addScenario";
import AddLocation from "../(reference)/location/addLocation";
// Encounter
import AddMonster from "../(reference)/monster/addMonster";
import AddItem from "../(reference)/item/addItem";
// Magic
// Spell
// Relationship
import AddCharacter from "../(reference)/character/add/page";
import HoverScrollField from "../_components/hoverScrollField";

import Link from "next/link";

export default function forms() {
  return (
    <div className="flex flex-col p-32">
      {/*<AddScenario/>*/}
      {/*<AddLocation/>*/}
      {/*<AddMonster/>
        <AddItem/>*/}
      {/*<AddCharacter/>*/}
      <div className="w-64 bg-secondary-light p-2">
        <HoverScrollField
          text={"henri eiab oansvu oaisdc ovnfuosa oasdjcbo ovfnbdsaoj"}
          style={""}
          innerStyle={""}
        />
      </div>
    </div>
  );
}
