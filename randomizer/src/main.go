package main

import (
	json "encoding/json"
	"fmt"
	"log"
	http "net/http"
)

// Characters

func getNewCharacter(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(CreateCharacter())
}

func getNewName(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetName())
}

func getNewAttributes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAttributes())
}

func getNewBackground(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetBackground())
}

func getNewAppearance(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAppearance())
}

func getNewPhysicalDetail(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetPhysicalDetail())
}

func getNewClothing(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetClothing())
}

func getNewPersonality(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetPersonality())
}

func getNewMannerism(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMannerism())
}

// NPCs

func getNewNpc(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(CreateNpc())
}

func getNewAsset(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAsset())
}

func getNewLiability(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetLiability())
}

func getNewGoal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetGoal())
}

func getNewMisfortune(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMisfortune())
}

func getNewMission(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMission())
}

func getNewMethod(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMethod())
}

func getNewSecret(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSecret())
}

func getNewReputation(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetReputation())
}

func getNewHobby(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetHobby())
}

func getNewRelationship(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetRelationship())
}

func getNewDivineDomain(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDivineDomain())
}

func getNewAfterPartyDisaster(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAfterPartyDisaster())
}

// Monsters

func getNewMonster(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(CreateMonster())
}

func getNewMonsterSizing(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterSizing())
}

func getNewMonsterAttributes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterAttributes())
}

func getNewEnvironment(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetEnvironment())
}

func getNewAnimalSky(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAnimalSky())
}

func getNewAnimalGround(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAnimalGround())
}

func getNewAnimalWater(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetAnimalWater())
}

func getNewMonsterFeature(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

func getNewMonsterTrait(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

func getNewMonsterAbility(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

func getNewMonsterTactic(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

func getNewMonsterPersonality(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

func getNewMonsterWeakness(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMonsterFeature())
}

// Items

// Magic
func getNewSpell(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(CreateSpell())
}

func getNewSpellEffectPhysical(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellEffectPhysical())
}

func getNewSpellElementPhysical(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellElementPhysical())
}

func getNewSpellFormPhysical(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellFormPhysical())
}

func getNewSpellEffectEthereal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellEffectEthereal())
}

func getNewSpellElementEthereal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellElementEthereal())
}

func getNewSpellFormEthereal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetSpellFormEthereal())
}

func getNewMutation(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMutation())
}

func getNewInsanity(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetInsanity())
}

func getNewOmen(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetMutation())
}

// Locations

func getNewCityTheme(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetCityTheme())
}

func getNewCityEvent(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetCityEvent())
}

func getNewDistrictTheme(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDistrictTheme())
}

func getNewBuildingUpperClass(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetBuildingUpperClass())
}

func getNewBuildingLowerClass(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetBuildingLowerClass())
}

func getNewCityActivity(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetCityActivity())
}

func getNewBuildingRoom(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetBuildingRoom())
}

func getNewTacticalFeatureStreet(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetTacticalFeatureStreet())
}

func getNewTacticalFeatureBuilding(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetTacticalFeatureBuilding())
}

func getNewFaction(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetFaction())
}

func getNewFactionTrait(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetFactionTrait())
}

func getNewFactionGoal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetFactionGoal())
}

func getNewWildRegion(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildRegion())
}

func getNewWildLandmark(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildLandmark())
}

func getNewWildStructure(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildStructure())
}

func getNewWildTrait(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildTrait())
}

func getNewWildDiscovery(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildDiscovery())
}

func getNewWildActivity(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildActivity())
}

func getNewWildHazard(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetWildHazard())
}

func getNewPlantEdible(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetPlantEdible())
}

func getNewPlantPoisonous(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetPlantPoisonous())
}

func getNewInnAdjective(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetInnAdjective())
}

func getNewInnNoun(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetInnNoun())
}

func getNewInnQuirk(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetInnQuirk())
}

func getNewDungeonEntrance(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonEntrance())
}

func getNewDungeonForm(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonForm())
}

func getNewDungeonLayout(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonLayout())
}

func getNewDungeonRuination(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonRuination())
}

func getNewDungeonReward(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonReward())
}

func getNewDungeonActivity(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonActivity())
}

func getNewDungeonRoom(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonRoom())
}

func getNewDungeonDetail(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonDetail())
}

func getNewDungeonTrick(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonTrick())
}

func getNewDungeonHazard(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetDungeonHazard())
}

func getNewTrapEffect(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetTrapEffect())
}

func getNewTrapTrigger(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(GetTrapTrigger())
}

// Webpoint

type endpoint struct {
	address  string
	function func(http.ResponseWriter, *http.Request)
}

func handleRequests(port string) {
	endpoints := []*endpoint{
		// Characters
		{"/character", getNewCharacter},
		{"/character/attributes", getNewAttributes},
		{"/character/name", getNewName},
		{"/character/background", getNewBackground},
		{"/character/appearance", getNewAppearance},
		{"/character/physicaldetail", getNewPhysicalDetail},
		{"/character/clothing", getNewClothing},
		{"/character/personality", getNewPersonality},
		{"/character/mannerism", getNewMannerism},

		// NPCs
		{"/npc", getNewNpc},
		{"/npc/asset", getNewAsset},
		{"/npc/liability", getNewLiability},
		{"/npc/goal", getNewGoal},
		{"/npc/misfortune", getNewMisfortune},
		{"/npc/mission", getNewMission},
		{"/npc/method", getNewMethod},
		{"/npc/secret", getNewSecret},
		{"/npc/reputation", getNewReputation},
		{"/npc/hobby", getNewHobby},
		{"/npc/relationship", getNewRelationship},
		{"/divinedomain", getNewDivineDomain},
		{"/afterpartydisaster", getNewAfterPartyDisaster},

		// Monsters
		{"/monster", getNewMonster},
		{"/monster/sizing", getNewMonsterSizing},
		{"/monster/attributes", getNewMonsterAttributes},
		{"/monster/environment", getNewEnvironment},
		{"/monster/animalsky", getNewAnimalSky},
		{"/monster/animalground", getNewAnimalGround},
		{"/monster/animalwater", getNewAnimalWater},
		{"/monster/feature", getNewMonsterFeature},
		{"/monster/trait", getNewMonsterTrait},
		{"/monster/ability", getNewMonsterAbility},
		{"/monster/tactic", getNewMonsterTactic},
		{"/monster/personality", getNewMonsterPersonality},
		{"/monster/weakness", getNewMonsterWeakness},

		// Items
		//{"/item/", getNew},

		// Magic
		{"/spell", getNewSpell},
		{"/spell/effectphysical", getNewSpellEffectPhysical},
		{"/spell/elementphysical", getNewSpellElementPhysical},
		{"/spell/formphysical", getNewSpellFormPhysical},
		{"/spell/effectethereal", getNewSpellEffectEthereal},
		{"/spell/elementethereal", getNewSpellElementEthereal},
		{"/spell/formethereal", getNewSpellFormEthereal},
		{"/mutation", getNewMutation},
		{"/insanity", getNewInsanity},
		{"/omen", getNewOmen},

		// Locations
		//{"/location", getNewLocation},
		{"/location/city/theme", getNewCityTheme},
		{"/location/city/event", getNewCityEvent},
		{"/location/city/district", getNewDistrictTheme},
		{"/location/building/upperclass", getNewBuildingUpperClass},
		{"/location/building/lowerclass", getNewBuildingLowerClass},
		{"/location/city/activity", getNewCityActivity},
		{"/location/building/room", getNewBuildingRoom},
		{"/location/tacticalfeature/building", getNewTacticalFeatureBuilding},
		{"/location/tacticalfeature/street", getNewTacticalFeatureStreet},
		{"/faction", getNewFaction},
		{"/faction/trait", getNewFactionTrait},
		{"/faction/goal", getNewFactionGoal},
		{"/location/wild/region", getNewWildRegion},
		{"/location/wild/landmark", getNewWildLandmark},
		{"/location/wild/structure", getNewWildStructure},
		{"/location/wild/trait", getNewWildTrait},
		{"/location/wild/discovery", getNewWildDiscovery},
		{"/location/wild/activity", getNewWildActivity},
		{"/location/wild/hazard", getNewWildHazard},
		//{"/location/wild/plant", getNewPlant},
		{"/location/wild/plant/edible", getNewPlantEdible},
		{"/location/wild/plant/poisonous", getNewPlantPoisonous},
		//{"/location/inn", getNewInn},
		{"/location/inn/adjective", getNewInnAdjective},
		{"/location/inn/noun", getNewInnNoun},
		{"/location/inn/quirk", getNewInnQuirk},
		//{"/location/dungeon", getNewDungeon},
		{"/location/dungeon/entrance", getNewDungeonEntrance},
		{"/location/dungeon/form", getNewDungeonForm},
		{"/location/dungeon/layout", getNewDungeonLayout},
		{"/location/dungeon/ruination", getNewDungeonRuination},
		{"/location/dungeon/reward", getNewDungeonReward},
		{"/location/dungeon/activity", getNewDungeonActivity},
		{"/location/dungeon/room", getNewDungeonRoom},
		{"/location/dungeon/detail", getNewDungeonDetail},
		{"/location/dungeon/trick", getNewDungeonTrick},
		{"/location/dungeon/hazard", getNewDungeonHazard},
		//{"/location/trap", getNewTrap},
		{"/location/trap/effect", getNewTrapEffect},
		{"/location/trap/trigger", getNewTrapTrigger},
	}

	//test
	for i := 0; i < len(endpoints); i++ {
		http.HandleFunc(endpoints[i].address, endpoints[i].function)
	}

	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func main() {
	port := "10000"
	fmt.Println("Opening Up on port: " + port)
	handleRequests(port)
	fmt.Println("Closing Down")
}
