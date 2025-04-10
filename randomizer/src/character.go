package main

import (
	rand "math/rand/v2"
)

var feminineNames = [...]string{"Adelaide", "Alma", "Barsaba", "Beatrix", "Bianca", "Cleopha", "Clover", "Constance", "Damaris", "Daphne", "Demona", "Elsbeth", "Esme", "Fern", "Hester", "Hippolyta", "Jessamine", "Jilly", "Morgot", "Minerva", "Nerissa", "Odette", "Olga", "Orchid", "Pepper", "Phoebe", "Piety", "Poppy", "Silence", "Sybil", "Trillby", "Tuesday", "Ursula", "Vivian", "Wendy", "Zora"}

var masculineNames = [...]string{"Balthazar", "Basil", "Bertram", "Blaxton", "Chadwick", "Clovis", "Destrian", "Ellis", "Erasmus", "Faustus", "Finn", "Fitzhugh", "Florian", "Fox", "Godwin", "Hannibal", "Jasper", "Jiles", "Jules", "Leopold", "Merrick", "Mortimer", "Ogden", "Orion", "Oswald", "Percival", "Peregrine", "Quentin", "Redmaine", "Reinhold", "Silas", "Stilton", "Stratford", "Tenpiece", "Waverly", "Webster"}

var nobleSurnames = [...]string{"Belvedere", "Bithesea", "Calaver", "Carvolo", "De Rippe", "Droll", "Dunlow", "Edevane", "Erelong", "Febland", "Fernsby", "Fisk", "Gastrell", "Girdwood", "Gorgon", "Grimeson", "Gruger", "Hitheryon", "La Marque", "Malmora", "Miter", "Oblington", "Onymous", "Phillifent", "Portendorfer", "Romatet", "Rothery", "Skorbeck", "Slora", "Southwark", "Stavish", "Vandermeer", "Wellbelove", "Westergren", "Wexley", "Willberforce"}

var commonSurnames = [...]string{"Barrow", "Beetleman", "Berrycloth", "Birdwhistle", "Bobich", "Chips", "Coffin", "Crumpling", "Culpepper", "Dankworth", "Digworthy", "Dreggs", "Gimble", "Graveworm", "Greelish", "Hardwick", "Hatman", "Hovel", "Knibbs", "Midnighter", "Needle", "Nethercoat", "Pestle", "Relish", "Rumbold", "Rummage", "Sallow", "Saltmarsh", "Silverless", "Skitter", "Slee", "Slitherly", "Stoker", "Tarwater", "Tumbler", "Villin"}

var civilizedJobs = [...]string{"Acolyte", "Actor", "Apothecary", "Baker", "Barber", "Blacksmith", "Brewer", "Bureaucrat", "Butcher", "Carpenter", "Clockmaker", "Courier", "Courtier", "Diplomat", "Fishmonger", "Guard", "Haberdasher", "Innkeeper", "Item-seller", "Jeweler", "Knight", "Locksmith", "Mason", "Miller", "Musician", "Noble", "Painter", "Priest", "Scholar", "Scribe", "Sculptor", "Shipwright", "Soldier", "Tailor", "Taxidermist", "Wigmaker"}

func getJobCivil() string {
	return civilizedJobs[rand.IntN(len(civilizedJobs))]
}

var underworldJobs = [...]string{"Alchemist", "Beggar-Prince", "Blackmailer", "Bounty-Hunter", "Chimney Sweep", "Coin-Clipper", "Contortionist", "Counterfeiter", "Cultist", "Cutpurse", "Debt-Collector", "Deserter", "Fence", "Fortuneteller", "Galley Slave", "Gambler", "Gravedigger", "Headsman", "Hedge Knight", "Highwayman", "Housebreaker", "Kidnapper", "Mad Prophet", "Mountebank", "Peddler", "Pit-Fighter", "Poisoner", "Rat-Catcher", "Scrivener", "Sellsword", "Slave", "Smuggler", "Street Performer", "Tattooist", "Urchin", "Usurer"}

func getJobUnder() string {
	return underworldJobs[rand.IntN(len(underworldJobs))]
}

var wildernessJobs = [...]string{"Apiarist", "Bandit", "Caravan Guard", "Caravaneer", "Druid", "Exile", "Explorer", "Farmer", "Fisherman", "Forager", "Fugitive", "Hedge Wizard", "Hermit", "Hunter", "Messenger", "Minstrel", "Monk", "Monster Hunter", "Outlander", "Village Idiot", "Pilgrim", "Poacher", "Raider", "Ranger", "Sage", "Scavenger", "Scout", "Shepherd", "Seer", "Surveyor", "Tinkerer", "Tomb Raider", "Trader", "Trapper", "Witch", "Woodcutter"}

func getJobWild() string {
	return wildernessJobs[rand.IntN(len(wildernessJobs))]
}

var appearances = [...]string{"Aquiline", "Athletic", "Barrel-Chested", "Boney", "Brawny", "Brutish", "Bullnecked", "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate", "Furrowed", "Gaunt", "Gorgeous", "Grizzled", "Haggard", "Handsome", "Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny", "Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque", "Towering", "Trim", "Weathered", "Willowy", "Wiry", "Wrinkled"}

func getAppearance() string {
	return appearances[rand.IntN(len(appearances))]
}

var physicalDetails = [...]string{"Acid Scars", "Battle Scars", "Birthmark", "Braided Hair", "Brand Mark", "Broken Nose", "Bronze Skinned", "Burn Scars", "Bushy Eyebrows", "Curly Hair", "Dark Skinned", "Dreadlocks", "Exotic Accent", "Flogging Scars", "Freckles", "Gold Tooth", "Hoarse Voice", "Huge Beard", "Long Hair", "Matted Hair", "Missing Ear", "Missing Teeth", "Mustache", "Mutton Chops", "Nine Fingers", "Oiled Hair", "One-Eyed", "Pale Skinned", "Piercings", "Ritual Scars", "Sallow Skin", "Shaved Head", "Sunburned", "Tangled Hair", "Tattoos", "Topknot"}

func getPhysicalDetail() string {
	return physicalDetails[rand.IntN(len(physicalDetails))]
}

var clothes = [...]string{"Antique", "Battle-Torn", "Bedraggled", "Blood-Stained", "Ceremonial", "Dated", "Decaying", "Eccentric", "Elegant", "Embroidered", "Exotic", "Fashionable", "Flamboyant", "Food-Stained", "Formal", "Frayed", "Frumpy", "Garish", "Grimy", "Haute Couture", "Lacey", "Livery", "Mud-Stained", "Ostentatious", "Oversized", "Patched", "Patterned", "Perfumed", "Practical", "Rumpled", "Sigils", "Singed", "Tasteless", "Undersized", "Wine-Stained", "Worn Out"}

func getClothing() string {
	return clothes[rand.IntN(len(clothes))]
}

var personalities = [...]string{"Bitter", "Brave", "Cautious", "Chipper", "Contrary", "Cowardly", "Cunning", "Driven", "Entitled", "Gregarious", "Grumpy", "Heartless", "Honour-Bound", "Hotheaded", "Inquisitive", "Irascible", "Jolly", "Know-It-All", "Lazy", "Loyal", "Menacing", "Mopey", "Nervous", "Protective", "Righteous", "Rude", "Sarcastic", "Savage", "Scheming", "Serene", "Spacey", "Stoic", "Stubborn", "Stuck-Up", "Suspicious", "Wisecracking"}

func getPersonality() string {
	return personalities[rand.IntN(len(personalities))]
}

var mannerisms = [...]string{"Anecdotes", "Breathy", "Chuckles", "Clipped", "Cryptic", "Deep Voice", "Drawl", "Enunciates", "Flowery Speech", "Gravelly Voice", "Highly Formal", "Hypnotic", "Interrupts", "Laconic", "Laughs", "Long Pauses", "Melodious", "Monotone", "Mumbles", "Narrates", "Overly Casual", "Quaint Sayings", "Rambles", "Random Facts", "Rapid-Fire", "Rhyming", "Robotic", "Slow Speech", "Speechifies", "Squeaky", "Street Slang", "Stutters", "Talks to Self", "Trails Off", "Very Loud", "Whispers"}

func getMannerism() string {
	return mannerisms[rand.IntN(len(mannerisms))]
}

func getName() string {
	newName := ""
	switch rand.IntN(2) {
	case 0:
		newName += masculineNames[rand.IntN(len(masculineNames))]
	case 1:
		newName += feminineNames[rand.IntN(len(feminineNames))]
	}

	newName += " "

	switch rand.IntN(2) {
	case 0:
		newName += nobleSurnames[rand.IntN(len(nobleSurnames))]
	case 1:
		newName += commonSurnames[rand.IntN(len(commonSurnames))]
	}
	return newName
}

type Abilities struct {
	Strength  int
	Dexterity int
	Willpower int
}

func getAttributes() *Abilities {
	abilityChoices := [6][3]int{
		{2, 1, 0},
		{2, 0, 1},
		{1, 2, 0},
		{0, 2, 1},
		{1, 0, 2},
		{0, 1, 2},
	}
	choice := abilityChoices[rand.IntN(len(abilityChoices))]
	return &Abilities{
		Strength:  choice[0],
		Dexterity: choice[1],
		Willpower: choice[2],
	}
}

type Character struct {
	Name           string
	HealthMax      int
	HealthLost     int
	Armor          int
	Strength       int
	Dexterity      int
	Willpower      int
	Xp             int
	Level          int
	Background     string
	Appearance     string
	PhysicalDetail string
	Clothing       string
	Personality    string
	Mannerism      string
}

func getBackground() string {
	job := rand.IntN(3)
	newJob := ""
	if job == 0 {
		newJob = getJobCivil()
	} else if job == 1 {
		newJob = getJobUnder()
	} else {
		newJob = getJobWild()
	}
	return newJob
}

func createCharacter() *Character {
	newAbilities := getAttributes()
	return &Character{
		Name:           "",
		HealthMax:      4,
		HealthLost:     0,
		Armor:          6,
		Strength:       newAbilities.Strength,
		Dexterity:      newAbilities.Dexterity,
		Willpower:      newAbilities.Willpower,
		Xp:             0,
		Level:          1,
		Background:     getBackground(),
		Appearance:     getAppearance(),
		PhysicalDetail: getPhysicalDetail(),
		Clothing:       getClothing(),
		Personality:    getPersonality(),
		Mannerism:      getMannerism(),
	}
}
