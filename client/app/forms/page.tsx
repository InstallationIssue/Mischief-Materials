// prettier-ignore
'use client'

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

export default function forms() {
  return (
    <div className="flex flex-col p-32">
      {/*<AddScenario />
      <AddLocation />*/}
      <AddMonster />
      {/*<AddItem/>
      <AddCharacter/>*/}
    </div>
  );
}
