package main

import (
	json "encoding/json"
	"fmt"
	"log"
	http "net/http"

	atoms "randomizer/atoms"
)

// Characters

func getNewCharacter(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.CreateCharacter())
}

func getNewName(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetName())
}

func getNewAttributes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAttributes())
}

func getNewBackground(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetBackground())
}

func getNewAppearance(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAppearance())
}

func getNewPhysicalDetail(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetPhysicalDetail())
}

func getNewClothing(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetClothing())
}

func getNewPersonality(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetPersonality())
}

func getNewMannerism(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMannerism())
}

// NPCs

func getNewNpc(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.CreateNpc())
}

func getNewAsset(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAsset())
}

func getNewLiability(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetLiability())
}

func getNewGoal(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetGoal())
}

func getNewMisfortune(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMisfortune())
}

func getNewMission(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMission())
}

func getNewMethod(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMethod())
}

func getNewSecret(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetSecret())
}

func getNewReputation(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetReputation())
}

func getNewHobby(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetHobby())
}

func getNewRelationship(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetRelationship())
}

func getNewDivineDomain(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetDivineDomain())
}

func getNewAfterPartyDisaster(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAfterPartyDisaster())
}

// Monsters

func getNewMonster(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.CreateMonster())
}

func getNewMonsterSizing(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterSizing())
}

func getNewMonsterAttributes(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterAttributes())
}

func getNewEnvironment(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetEnvironment())
}

func getNewAnimalSky(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAnimalSky())
}

func getNewAnimalGround(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAnimalGround())
}

func getNewAnimalWater(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetAnimalWater())
}

func getNewMonsterFeature(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

func getNewMonsterTrait(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

func getNewMonsterAbility(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

func getNewMonsterTactic(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

func getNewMonsterPersonality(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

func getNewMonsterWeakness(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(atoms.GetMonsterFeature())
}

// Items

func handleRequests() {
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

	// Spells

	// Locations

	// Treasures

	// Weapons

	log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
	fmt.Println("Opening Up")
	handleRequests()
	fmt.Println("Closing Down")
}
