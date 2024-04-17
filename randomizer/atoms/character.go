package atoms

import (
	rand "math/rand/v2"
)

var feminineNames = [...]string{"Adelaide", "Alma", "Barsaba", "Beatrix", "Bianca", "Cleopha", "Clover", "Constance", "Damaris", "Daphne", "Demona", "Elsbeth", "Esme", "Fern", "Hester", "Hippolyta", "Jessamine", "Jilly", "Morgot", "Minerva", "Nerissa", "Odette", "Olga", "Orchid", "Pepper", "Phoebe", "Piety", "Poppy", "Silence", "Sybil", "Trillby", "Tuesday", "Ursula", "Vivian", "Wendy", "Zora"}

var masculineNames = [...]string{"Balthazar", "Basil", "Bertram", "Blaxton", "Chadwick", "Clovis", "Destrian", "Ellis", "Erasmus", "Faustus", "Finn", "Fitzhugh", "Florian", "Fox", "Godwin", "Hannibal", "Jasper", "Jiles", "Jules", "Leopold", "Merrick", "Mortimer", "Ogden", "Orion", "Oswald", "Percival", "Peregrine", "Quentin", "Redmaine", "Reinhold", "Silas", "Stilton", "Stratford", "Tenpiece", "Waverly", "Webster"}

var nobleSurnames = [...]string{"Belvedere", "Bithesea", "Calaver", "Carvolo", "De Rippe", "Droll", "Dunlow", "Edevane", "Erelong", "Febland", "Fernsby", "Fisk", "Gastrell", "Girdwood", "Gorgon", "Grimeson", "Gruger", "Hitheryon", "La Marque", "Malmora", "Miter", "Oblington", "Onymous", "Phillifent", "Portendorfer", "Romatet", "Rothery", "Skorbeck", "Slora", "Southwark", "Stavish", "Vandermeer", "Wellbelove", "Westergren", "Wexley", "Willberforce"}

var commonSurnames = [...]string{"Barrow", "Beetleman", "Berrycloth", "Birdwhistle", "Bobich", "Chips", "Coffin", "Crumpling", "Culpepper", "Dankworth", "Digworthy", "Dreggs", "Gimble", "Graveworm", "Greelish", "Hardwick", "Hatman", "Hovel", "Knibbs", "Midnighter", "Needle", "Nethercoat", "Pestle", "Relish", "Rumbold", "Rummage", "Sallow", "Saltmarsh", "Silverless", "Skitter", "Slee", "Slitherly", "Stoker", "Tarwater", "Tumbler", "Villin"}

var civilizedJobs = [...]string{"Acolyte", "Actor", "Apothecary", "Baker", "Barber", "Blacksmith", "Brewer", "Bureaucrat", "Butcher", "Carpenter", "Clockmaker", "Courier", "Courtier", "Diplomat", "Fishmonger", "Guard", "Haberdasher", "Innkeeper", "Item-seller", "Jeweler", "Knight", "Locksmith", "Mason", "Miller", "Musician", "Noble", "Painter", "Priest", "Scholar", "Scribe", "Sculptor", "Shipwright", "Soldier", "Tailor", "Taxidermist", "Wigmaker"}

func GetJobCivil() string {
	return civilizedJobs[rand.IntN(36)]
}

var underworldJobs = [...]string{"Alchemist", "Beggar-Prince", "Blackmailer", "Bounty-Hunter", "Chimney Sweep", "Coin-Clipper", "Contortionist", "Counterfeiter", "Cultist", "Cutpurse", "Debt-Collector", "Deserter", "Fence", "Fortuneteller", "Galley Slave", "Gambler", "Gravedigger", "Headsman", "Hedge Knight", "Highwayman", "Housebreaker", "Kidnapper", "Mad Prophet", "Mountebank", "Peddler", "Pit-Fighter", "Poisoner", "Rat-Catcher", "Scrivener", "Sellsword", "Slave", "Smuggler", "Street Performer", "Tattooist", "Urchin", "Usurer"}

func GetJobUnder() string {
	return underworldJobs[rand.IntN(36)]
}

var wildernessJobs = [...]string{"Apiarist", "Bandit", "Caravan Guard", "Caravaneer", "Druid", "Exile", "Explorer", "Farmer", "Fisherman", "Forager", "Fugitive", "Hedge Wizard", "Hermit", "Hunter", "Messenger", "Minstrel", "Monk", "Monster Hunter", "Outlander", "Village Idiot", "Pilgrim", "Poacher", "Raider", "Ranger", "Sage", "Scavenger", "Scout", "Shepherd", "Seer", "Surveyor", "Tinkerer", "Tomb Raider", "Trader", "Trapper", "Witch", "Woodcutter"}

func GetJobWild() string {
	return wildernessJobs[rand.IntN(36)]
}

var appearances = [...]string{"Aquiline", "Athletic", "Barrel-Chested", "Boney", "Brawny", "Brutish", "Bullnecked", "Chiseled", "Coltish", "Corpulent", "Craggy", "Delicate", "Furrowed", "Gaunt", "Gorgeous", "Grizzled", "Haggard", "Handsome", "Hideous", "Lanky", "Pudgy", "Ripped", "Rosy", "Scrawny", "Sinewy", "Slender", "Slumped", "Solid", "Square-Jawed", "Statuesque", "Towering", "Trim", "Weathered", "Willowy", "Wiry", "Wrinkled"}

func GetAppearance() string {
	return appearances[rand.IntN(36)]
}

var physicalDetails = [...]string{"Acid Scars", "Battle Scars", "Birthmark", "Braided Hair", "Brand Mark", "Broken Nose", "Bronze Skinned", "Burn Scars", "Bushy Eyebrows", "Curly Hair", "Dark Skinned", "Dreadlocks", "Exotic Accent", "Flogging Scars", "Freckles", "Gold Tooth", "Hoarse Voice", "Huge Beard", "Long Hair", "Matted Hair", "Missing Ear", "Missing Teeth", "Mustache", "Mutton Chops", "Nine Fingers", "Oiled Hair", "One-Eyed", "Pale Skinned", "Piercings", "Ritual Scars", "Sallow Skin", "Shaved Head", "Sunburned", "Tangled Hair", "Tattoos", "Topknot"}

func GetPhysicalDetail() string {
	return physicalDetails[rand.IntN(36)]
}

var clothes = [...]string{"Antique", "Battle-Torn", "Bedraggled", "Blood-Stained", "Ceremonial", "Dated", "Decaying", "Eccentric", "Elegant", "Embroidered", "Exotic", "Fashionable", "Flamboyant", "Food-Stained", "Formal", "Frayed", "Frumpy", "Garish", "Grimy", "Haute Couture", "Lacey", "Livery", "Mud-Stained", "Ostentatious", "Oversized", "Patched", "Patterned", "Perfumed", "Practical", "Rumpled", "Sigils", "Singed", "Tasteless", "Undersized", "Wine-Stained", "Worn Out"}

func GetClothing() string {
	return clothes[rand.IntN(36)]
}

var personalities = [...]string{"Bitter", "Brave", "Cautious", "Chipper", "Contrary", "Cowardly", "Cunning", "Driven", "Entitled", "Gregarious", "Grumpy", "Heartless", "Honour-Bound", "Hotheaded", "Inquisitive", "Irascible", "Jolly", "Know-It-All", "Lazy", "Loyal", "Menacing", "Mopey", "Nervous", "Protective", "Righteous", "Rude", "Sarcastic", "Savage", "Scheming", "Serene", "Spacey", "Stoic", "Stubborn", "Stuck-Up", "Suspicious", "Wisecracking"}

func GetPersonality() string {
	return personalities[rand.IntN(36)]
}

var mannerisms = [...]string{"Anecdotes", "Breathy", "Chuckles", "Clipped", "Cryptic", "Deep Voice", "Drawl", "Enunciates", "Flowery Speech", "Gravelly Voice", "Highly Formal", "Hypnotic", "Interrupts", "Laconic", "Laughs", "Long Pauses", "Melodious", "Monotone", "Mumbles", "Narrates", "Overly Casual", "Quaint Sayings", "Rambles", "Random Facts", "Rapid-Fire", "Rhyming", "Robotic", "Slow Speech", "Speechifies", "Squeaky", "Street Slang", "Stutters", "Talks to Self", "Trails Off", "Very Loud", "Whispers"}

func GetMannerism() string {
	return mannerisms[rand.IntN(36)]
}

func GetName() string {
	newName := ""
	if rand.IntN(2) == 0 {
		newName += masculineNames[rand.IntN(36)]
	} else {
		newName += feminineNames[rand.IntN(36)]
	}
	if rand.IntN(2) == 0 {
		newName += nobleSurnames[rand.IntN(36)]
	} else {
		newName += commonSurnames[rand.IntN(36)]
	}
	return newName
}

type abilities struct {
	strength  int
	dexterity int
	willpower int
}

func GetAttributes() *abilities {
	return &abilities{
		strength:  rand.IntN(3),
		dexterity: rand.IntN(3),
		willpower: rand.IntN(3),
	}
}

type Character struct {
	name           string
	health_max     int
	health_lost    int
	armor          int
	strength       int
	dexterity      int
	willpower      int
	xp             int
	level          int
	background     string
	appearance     string
	physicalDetail string
	clothing       string
	personality    string
	mannerism      string
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
	newAbilities := GetAttributes()
	return &Character{
		name:           "",
		health_max:     4,
		health_lost:    0,
		armor:          6,
		strength:       newAbilities.strength,
		dexterity:      newAbilities.dexterity,
		willpower:      newAbilities.willpower,
		xp:             0,
		level:          1,
		background:     GetBackground(),
		appearance:     GetAppearance(),
		physicalDetail: GetPhysicalDetail(),
		clothing:       GetClothing(),
		personality:    GetPersonality(),
		mannerism:      GetMannerism(),
	}
}
