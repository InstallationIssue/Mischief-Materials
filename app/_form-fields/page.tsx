import SingleLineText from "./singleLineText"
import MultiLineText from "./multiLineText"
import TraitsCharacter from "./traitsCharacter"
import Details from "./details"
import TraitsMonster from "./traitsMonster"
import Dropdown from "../_components/filter"
import Color from "./color"
import ImageInput from "./imageInput"
import SwitchField from "./switchField"
import Value from "./value"
import FormButtons from "./formButtons"
import IconsLocation from "./iconsLocation"
import IconsMagic from "./iconsMagic"
import IconsSize from "./iconsSize"
import Relation from "./relation"
import Attributes from "./attributes"
import VitalityLevel from "./vitalityLevel"

export default function Page (){

    return (
        <div className="w-3/4 rounded-lg overflow-clip flex flex-col p-2 gap-2">
            <SingleLineText id={"name"} showRandom={false} name={""}/>
            <MultiLineText id={"description"} name={""}/>
            <TraitsCharacter id={"traits-character"} clothing={"Clothing"} appearance={"Appearance"} physical_detail={"Physical Detail"} personality={"Personality"} mannerism={"Mannerism"} hobby={"Hobby"}/>
            <Details id={"details"} profession={"Profession"} reputation={"Reputation"} misfortune={"Misfortune"} goal={"Goal"} secret={"Secret"} asset={"Asset"} liability={"Liability"}/>
            <TraitsMonster id={"traits-monster"} personality={"Personality"} tactic={"Tactic"} weakness={"Weakness"}/>
            <Dropdown id={"profession"}/>
            <Color id={"color"} name={""}/>
            <ImageInput id={"image"} name={""}/>
            <SwitchField id={"npc"}/>
            <Value id={"Value"}/>
            <FormButtons showRandom={false}/>
            <IconsLocation id={"icon"} name={""}/>
            <IconsMagic id={"icon"}/>
            <IconsSize id={"size"}/>
            <Relation id={""}/>
            <Attributes idArmor={""} idLevel={""} />
            <VitalityLevel id={""}/>
        </div>
    )
}


