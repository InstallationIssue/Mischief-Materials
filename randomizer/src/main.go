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

func handleRequests(port string) {
	// Characters
	http.HandleFunc("/character", getNewCharacter)
	http.HandleFunc("/character/attributes", getNewAttributes)
	http.HandleFunc("/character/name", getNewName)
	http.HandleFunc("/character/background", getNewBackground)
	http.HandleFunc("/character/appearance", getNewAppearance)
	http.HandleFunc("/character/physicaldetail", getNewPhysicalDetail)
	http.HandleFunc("/character/clothing", getNewClothing)
	http.HandleFunc("/character/personality", getNewPersonality)
	http.HandleFunc("/character/mannerism", getNewMannerism)

	// NPCs
	http.HandleFunc("/npc", getNewNpc)
	http.HandleFunc("/npc/asset", getNewAsset)
	http.HandleFunc("/npc/liability", getNewLiability)
	http.HandleFunc("/npc/goal", getNewGoal)
	http.HandleFunc("/npc/misfortune", getNewMisfortune)
	http.HandleFunc("/npc/mission", getNewMission)
	http.HandleFunc("/npc/method", getNewMethod)
	http.HandleFunc("/npc/secret", getNewSecret)
	http.HandleFunc("/npc/reputation", getNewReputation)
	http.HandleFunc("/npc/hobby", getNewHobby)
	http.HandleFunc("/npc/relationship", getNewRelationship)
	http.HandleFunc("/divinedomain", getNewDivineDomain)
	http.HandleFunc("/afterpartydisaster", getNewAfterPartyDisaster)

	// Monsters
	http.HandleFunc("/monster", getNewMonster)
	http.HandleFunc("/monster/sizing", getNewMonsterSizing)
	http.HandleFunc("/monster/attributes", getNewMonsterAttributes)
	http.HandleFunc("/monster/environment", getNewEnvironment)
	http.HandleFunc("/monster/animalsky", getNewAnimalSky)
	http.HandleFunc("/monster/animalground", getNewAnimalGround)
	http.HandleFunc("/monster/animalwater", getNewAnimalWater)
	http.HandleFunc("/monster/feature", getNewMonsterFeature)
	http.HandleFunc("/monster/trait", getNewMonsterTrait)
	http.HandleFunc("/monster/ability", getNewMonsterAbility)
	http.HandleFunc("/monster/tactic", getNewMonsterTactic)
	http.HandleFunc("/monster/personality", getNewMonsterPersonality)
	http.HandleFunc("/monster/weakness", getNewMonsterWeakness)

	// Items

	// Magic
	http.HandleFunc("/spell", getNewSpell)
	http.HandleFunc("/spell/effectphysical", getNewSpellEffectPhysical)
	http.HandleFunc("/spell/elementphysical", getNewSpellElementPhysical)
	http.HandleFunc("/spell/formphysical", getNewSpellFormPhysical)
	http.HandleFunc("/spell/effectethereal", getNewSpellEffectEthereal)
	http.HandleFunc("/spell/elementethereal", getNewSpellElementEthereal)
	http.HandleFunc("/spell/formethereal", getNewSpellFormEthereal)
	http.HandleFunc("/mutation", getNewMutation)
	http.HandleFunc("/insanity", getNewInsanity)
	http.HandleFunc("/omen", getNewOmen)

	// Locations
	http.HandleFunc("/location", getNewCityTheme)
	http.HandleFunc("/location/citytheme", getNewCityTheme)

	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func main() {
	port := "10000"
	fmt.Println("Opening Up on port: " + port)
	handleRequests(port)
	fmt.Println("Closing Down")
}
