package main

import (
	json "encoding/json"
	"fmt"
	"log"
	http "net/http"
)

func healthz(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
}

// Healthcheck

// Webpoint

type endpoint struct {
	address  string
	function any
}

func handleRequests(port string) {
	endpoints := []*endpoint{
		// Characters
		{"/character", createCharacter},
		{"/character/attributes", getAttributes},
		{"/character/name", getName},
		{"/character/background", getBackground},
		{"/character/appearance", getAppearance},
		{"/character/physicaldetail", getPhysicalDetail},
		{"/character/clothing", getClothing},
		{"/character/personality", getPersonality},
		{"/character/mannerism", getMannerism},

		// NPCs
		{"/npc", createNpc},
		{"/npc/asset", getAsset},
		{"/npc/liability", getLiability},
		{"/npc/goal", getGoal},
		{"/npc/misfortune", getMisfortune},
		{"/npc/mission", getMission},
		{"/npc/method", getMethod},
		{"/npc/secret", getSecret},
		{"/npc/reputation", getReputation},
		{"/npc/hobby", getHobby},
		{"/npc/relationship", getRelationship},
		{"/divinedomain", getDivineDomain},
		{"/afterpartydisaster", getAfterPartyDisaster},

		// Monsters
		{"/monster", createMonster},
		{"/monster/sizing", getMonsterSizing},
		{"/monster/attributes", getMonsterAttributes},
		{"/monster/environment", getEnvironment},
		{"/monster/animalsky", getAnimalSky},
		{"/monster/animalground", getAnimalGround},
		{"/monster/animalwater", getAnimalWater},
		{"/monster/feature", getMonsterFeature},
		{"/monster/trait", getMonsterTrait},
		{"/monster/ability", getMonsterAbility},
		{"/monster/tactic", getMonsterTactic},
		{"/monster/personality", getMonsterPersonality},
		{"/monster/weakness", getMonsterWeakness},

		// Items
		//{"/item/", get},

		// Magic
		{"/spell", createSpell},
		{"/spell/effectphysical", getSpellEffectPhysical},
		{"/spell/elementphysical", getSpellElementPhysical},
		{"/spell/formphysical", getSpellFormPhysical},
		{"/spell/effectethereal", getSpellEffectEthereal},
		{"/spell/elementethereal", getSpellElementEthereal},
		{"/spell/formethereal", getSpellFormEthereal},
		{"/mutation", getMutation},
		{"/insanity", getInsanity},
		{"/omen", getOmen},

		// Locations
		//{"/location", getLocation},
		{"/location/city/theme", getCityTheme},
		{"/location/city/event", getCityEvent},
		{"/location/city/district", getDistrictTheme},
		{"/location/building/upperclass", getBuildingUpperClass},
		{"/location/building/lowerclass", getBuildingLowerClass},
		{"/location/city/activity", getCityActivity},
		{"/location/building/room", getBuildingRoom},
		{"/location/tacticalfeature/building", getTacticalFeatureBuilding},
		{"/location/tacticalfeature/street", getTacticalFeatureStreet},
		{"/faction", getFaction},
		{"/faction/trait", getFactionTrait},
		{"/faction/goal", getFactionGoal},
		{"/location/wild/region", getWildRegion},
		{"/location/wild/landmark", getWildLandmark},
		{"/location/wild/structure", getWildStructure},
		{"/location/wild/trait", getWildTrait},
		{"/location/wild/discovery", getWildDiscovery},
		{"/location/wild/activity", getWildActivity},
		{"/location/wild/hazard", getWildHazard},
		//{"/location/wild/plant", getPlant},
		{"/location/wild/plant/edible", getPlantEdible},
		{"/location/wild/plant/poisonous", getPlantPoisonous},
		//{"/location/inn", getInn},
		{"/location/inn/adjective", getInnAdjective},
		{"/location/inn/noun", getInnNoun},
		{"/location/inn/quirk", getInnQuirk},
		//{"/location/dungeon", getDungeon},
		{"/location/dungeon/entrance", getDungeonEntrance},
		{"/location/dungeon/form", getDungeonForm},
		{"/location/dungeon/layout", getDungeonLayout},
		{"/location/dungeon/ruination", getDungeonRuination},
		{"/location/dungeon/reward", getDungeonReward},
		{"/location/dungeon/activity", getDungeonActivity},
		{"/location/dungeon/room", getDungeonRoom},
		{"/location/dungeon/detail", getDungeonDetail},
		{"/location/dungeon/trick", getDungeonTrick},
		{"/location/dungeon/hazard", getDungeonHazard},
		//{"/location/trap", getTrap},
		{"/location/trap/effect", getTrapEffect},
		{"/location/trap/trigger", getTrapTrigger},
	}

	//test
	for i := 0; i < len(endpoints); i++ {
		http.HandleFunc(endpoints[i].address, func(w http.ResponseWriter, r *http.Request) {
			json.NewEncoder(w).Encode(endpoints[i].function)
		})
	}

	http.HandleFunc("/healthz", healthz)

	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func main() {
	port := "10000"
	fmt.Println("Opening Up on port: " + port)
	handleRequests(port)
	fmt.Println("Closing Down")
}
