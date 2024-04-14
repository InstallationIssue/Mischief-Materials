package characters

import (
	rand "math/rand/v2"
)

var civilizedJobs = [...]string{"Acolyte", "Actor", "Apothecary", "Baker", "Barber", "Blacksmith", "Brewer", "Bureaucrat", "Butcher", "Carpenter", "Clockmaker", "Courier", "Courtier", "Diplomat", "Fishmonger", "Guard", "Haberdasher", "Innkeeper", "Item-seller", "Jeweler", "Knight", "Locksmith", "Mason", "Miller", "Musician", "Noble", "Painter", "Priest", "Scholar", "Scribe", "Sculptor", "Shipwright", "Soldier", "Tailor", "Taxidermist", "Wigmaker"}

func GetJobCivil() string {
	newJob := civilizedJobs[rand.IntN(36)]
	return newJob
}

var underworldJobs = [...]string{"Alchemist", "Beggar-Prince", "Blackmailer", "Bounty-Hunter", "Chimney Sweep", "Coin-Clipper", "Contortionist", "Counterfeiter", "Cultist", "Cutpurse", "Debt-Collector", "Deserter", "Fence", "Fortuneteller", "Galley Slave", "Gambler", "Gravedigger", "Headsman", "Hedge Knight", "Highwayman", "Housebreaker", "Kidnapper", "Mad Prophet", "Mountebank", "Peddler", "Pit-Fighter", "Poisoner", "Rat-Catcher", "Scrivener", "Sellsword", "Slave", "Smuggler", "Street Performer", "Tattooist", "Urchin", "Usurer"}

func GetJobUnder() string {
	newJob := underworldJobs[rand.IntN(36)]
	return newJob
}

var wildernessJobs = [...]string{"Apiarist", "Bandit", "Caravan Guard", "Caravaneer", "Druid", "Exile", "Explorer", "Farmer", "Fisherman", "Forager", "Fugitive", "Hedge Wizard", "Hermit", "Hunter", "Messenger", "Minstrel", "Monk", "Monster Hunter", "Outlander", "Village Idiot", "Pilgrim", "Poacher", "Raider", "Ranger", "Sage", "Scavenger", "Scout", "Shepherd", "Seer", "Surveyor", "Tinkerer", "Tomb Raider", "Trader", "Trapper", "Witch", "Woodcutter"}

func GetJobWild() string {
	newJob := wildernessJobs[rand.IntN(36)]
	return newJob
}

var appearances = [...]string{"Aquiline", "Athletic", "Barrel-Chested", "Boney", "Brawny", "Brutish", "Bullnecked", "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate", "Furrowed", "Gaunt", "Gorgeous", "Grizzled", "Haggard", "Handsome", "Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny", "Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque", "Towering", "Trim", "Weathered", "Willowy", "Wiry", "Wrinkled"}

func GetAppearance() string {
	newAppearance := appearances[rand.IntN(36)]
	return newAppearance
}

var physicalDetails = [...]string{"Acid Scars", "Battle Scars", "Birthmark", "Braided Hair", "Brand Mark", "Broken Nose", "Bronze Skinned", "Burn Scars", "Bushy Eyebrows", "Curly Hair", "Dark Skinned", "Dreadlocks", "Exotic Accent", "Flogging Scars", "Freckles", "Gold Tooth", "Hoarse Voice", "Huge Beard", "Long Hair", "Matted Hair", "Missing Ear", "Missing Teeth", "Mustache", "Mutton Chops", "Nine Fingers", "Oiled Hair", "One-Eyed", "Pale Skinned", "Piercings", "Ritual Scars", "Sallow Skin", "Shaved Head", "Sunburned", "Tangled Hair", "Tattoos", "Topknot"}

func GetPhysicalDetail() string {
	newPhysicalDetail := physicalDetails[rand.IntN(36)]
	return newPhysicalDetail
}

var clothes = [...]string{"Antique", "Battle-Torn", "Bedraggled", "Blood-Stained", "Ceremonial", "Dated", "Decaying", "Eccentric", "Elegant", "Embroidered", "Exotic", "Fashionable", "Flamboyant", "Food-Stained", "Formal", "Frayed", "Frumpy", "Garish", "Grimy", "Haute Couture", "Lacey", "Livery", "Mud-Stained", "Ostentatious", "Oversized", "Patched", "Patterned", "Perfumed", "Practical", "Rumpled", "Sigils", "Singed", "Tasteless", "Undersized", "Wine-Stained", "Worn Out"}

func GetClothing() string {
	newClothes := clothes[rand.IntN(36)]
	return newClothes
}

var personalities = [...]string{"Bitter", "Brave", "Cautious", "Chipper", "Contrary", "Cowardly", "Cunning", "Driven", "Entitled", "Gregarious", "Grumpy", "Heartless", "Honour-Bound", "Hotheaded", "Inquisitive", "Irascible", "Jolly", "Know-It-All", "Lazy", "Loyal", "Menacing", "Mopey", "Nervous", "Protective", "Righteous", "Rude", "Sarcastic", "Savage", "Scheming", "Serene", "Spacey", "Stoic", "Stubborn", "Stuck-Up", "Suspicious", "Wisecracking"}

func GetPersonality() string {
	newPersonality := personalities[rand.IntN(36)]
	return newPersonality
}

var mannerisms = [...]string{"Anecdotes", "Breathy", "Chuckles", "Clipped", "Cryptic", "Deep Voice", "Drawl", "Enunciates", "Flowery Speech", "Gravelly Voice", "Highly Formal", "Hypnotic", "Interrupts", "Laconic", "Laughs", "Long Pauses", "Melodious", "Monotone", "Mumbles", "Narrates", "Overly Casual", "Quaint Sayings", "Rambles", "Random Facts", "Rapid-Fire", "Rhyming", "Robotic", "Slow Speech", "Speechifies", "Squeaky", "Street Slang", "Stutters", "Talks to Self", "Trails Off", "Very Loud", "Whispers"}

func GetMannerism() string {
	newMannerism := mannerisms[rand.IntN(36)]
	return newMannerism
}

type abilities struct {
	strength  int
	dexterity int
	willpower int
}

func GetAbilities() *abilities {
	newAbilities := abilities{
		strength:  rand.IntN(3),
		dexterity: rand.IntN(3),
		willpower: rand.IntN(3),
	}
	return &newAbilities
}

type Character struct {
	Name           string
	Health_max     int
	Health_lost    int
	Armor          int
	Str            int
	Dex            int
	Wil            int
	Xp             int
	Level          int
	Background     string
	Appearance     string
	PhysicalDetail string
	Clothing       string
	Personality    string
	Mannerism      string
}

func GetBackground() string {
	job := rand.IntN(3)
	newJob := ""
	if job == 0 {
		newJob = GetJobCivil()
	} else if job == 1 {
		newJob = GetJobUnder()
	} else {
		newJob = GetJobWild()
	}
	return newJob
}

func CreateCharacter() *Character {
	newAbilities := GetAbilities()
	var newCharacter = Character{
		Name:           "",
		Health_max:     4,
		Health_lost:    0,
		Armor:          6,
		Str:            newAbilities.strength,
		Dex:            newAbilities.dexterity,
		Wil:            newAbilities.willpower,
		Xp:             0,
		Level:          1,
		Background:     GetBackground(),
		Appearance:     GetAppearance(),
		PhysicalDetail: GetPhysicalDetail(),
		Clothing:       GetClothing(),
		Personality:    GetPersonality(),
		Mannerism:      GetMannerism(),
	}
	return &newCharacter
}
