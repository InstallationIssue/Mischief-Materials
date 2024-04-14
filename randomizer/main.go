package main

import (
	json "encoding/json"
	"fmt"
	"log"
	http "net/http"

	atoms "randomizer/atoms"
)

func getNewCharacter(w http.ResponseWriter, r *http.Request) {
	var newCharacter atoms.Character = *atoms.CreateCharacter()
	json.NewEncoder(w).Encode(newCharacter)
}

func getNewName(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("")
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

func handleRequests() {
	http.HandleFunc("/character", getNewCharacter)
	http.HandleFunc("/character/name", getNewName)
	http.HandleFunc("/character/background", getNewBackground)
	http.HandleFunc("/character/appearance", getNewAppearance)
	http.HandleFunc("/character/physicaldetail", getNewPhysicalDetail)
	http.HandleFunc("/character/clothing", getNewClothing)
	http.HandleFunc("/character/personality", getNewPersonality)
	http.HandleFunc("/character/mannerism", getNewMannerism)
	log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
	fmt.Println("Opening Up")
	handleRequests()
	fmt.Println("Closing Down")
}
