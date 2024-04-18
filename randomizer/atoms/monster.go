package atoms

import (
	rand "math/rand/v2"
)

var monsterSize = [...]string{"Weak", "Typical", "Tough", "Hulking", "Colossal"}

func GetMonsterSize() string {
	return monsterSize[rand.IntN(5)]
}

var environment = [...]string{"Aerial", "Terrestrial", "Aquatic"}

func GetEnvironment() string {
	return environment[rand.IntN(3)]
}

var animalSky = [...]string{"Albatross", "Bat", "Beetle", "Bird of Paradise", "Butterfly", "Condor", "Crane", "Crow", "Dragonfly", "Eagle", "Falcon", "Firefly", "Flamingo", "Fly", "Flying Squirrel", "Goose", "Gull", "Hummingbird", "Kingfisher", "Locust", "Magpie", "Mantis", "Mockingbird", "Mosquito", "Moth", "Owl", "Parrot", "Peacock", "Pelican", "Pteranodon", "Rooster", "Sparrow", "Swan", "Vulture", "Wasp", "Woodpecker"}

func GetAnimalSky() string {
	return animalSky[rand.IntN(36)]
}

var animalGround = [...]string{"Ant", "Ape", "Armadillo", "Badger", "Bear", "Boar", "Caterpillar", "Centipede", "Chameleon", "Cockroach", "Deer", "Elephant", "Ferret", "Fox", "Giraffe", "Goat", "Horse", "Human", "Mole", "Ostrich", "Ox", "Porcupine", "Rabbit", "Raccoon", "Rat", "Rhinoceros", "Scorpion", "Sheep", "Slug", "Snail", "Snake", "Spider", "Squirrel", "Tiger", "Wolf", "Wolverine"}

func GetAnimalGround() string {
	return animalGround[rand.IntN(36)]
}

var animalWater = [...]string{"Alligator", "Amoeba", "Anglerfish", "Beaver", "Clam", "Crab", "Dolphin", "Eel", "Frog", "Hippo", "Jellyfish", "Leech", "Lobster", "Manatee", "Manta Ray", "Muskrat", "Narwhal", "Newt", "Octopus", "Otter", "Penguin", "Platypus", "Pufferfish", "Salamander", "Anemone", "Sea Urchin", "Seahorse", "Seal", "Shark", "Shrimp", "Squid", "Swordfish", "Tadpole", "Turtle", "Walrus", "Whale"}

func GetAnimalWater() string {
	return animalWater[rand.IntN(36)]
}

var monsterFeatures = [...]string{"Antlers", "Beak", "Carapace", "Claws", "Compound Eyes", "Eye Stalks", "Fangs", "Fins", "Fur", "Gills", "Hooves", "Horns", "Legless", "Long tongue", "Many-eyed", "Many-limbed", "Mucus", "Pincers", "Plates", "Plumage", "Proboscis", "Scales", "Segments", "Shaggy Hair", "Shell", "Spikes", "Spinnerets", "Spines", "Stinger", "Suctions cups", "Tail", "Talons", "Tentacles", "Trunk", "Tusks", "Wings"}

func GetMonsterFeature() string {
	return monsterFeatures[rand.IntN(36)]
}

var monsterTraits = [...]string{"Amphibious", "Bloated", "Brittle", "Cannibal", "Clay-like", "Colossal", "Crystalline", "Decaying", "Ethereal Element", "Ethereal", "Ever-young", "Eyeless", "Fearless", "Fluffy", "Fungal", "Gelatinous", "Geometric", "Hardened", "Illusory", "Intelligent", "Iridescent", "Luminous", "Many-headed", "Mechanical", "Physical Element", "Planar", "Reflective", "Rubbery", "Shadowy", "Sharp", "Skeletal", "Slimy", "Sticky", "Stinking", "Tiny", "Translucent"}

func GetMonsterTrait() string {
	return monsterTraits[rand.IntN(36)]
}

var monsterAbilities = [...]string{"Absorbing", "Acid blood", "Anti-magic", "Blinding", "Breath weapon", "Camouflaging", "Duplicating", "Electric", "Entangling", "Ethereal effect", "Exploding", "Flying", "Gaze weapon", "Hypnotizing", "Impervious", "Invisible", "Life-draining", "Magnetic", "Mimicking", "Mind-reading", "Paralyzing", "Phasing", "Physical effect", "Poisonous", "Radioactive", "Reflective", "Regenerating", "Shapeshifting", "Spell-casting", "Stealthy", "Strangling", "Super-strength", "Telekinetic", "Teleporting", "Vampiric", "Wall-crawling"}

func GetMonsterAbility() string {
	return monsterAbilities[rand.IntN(36)]
}

var monsterTactics = [...]string{"Ambush", "Call for support", "Capture", "Charge", "Climb foes", "Compel worship", "Create barrier", "Deceive", "Demand duel", "Disorient", "Encircle", "Evade", "Gang up", "Gather strength", "Go berserk", "Harry", "Hurl foes", "Immobilize", "Manipulate", "Mock", "Monologue", "Order minion", "Protect leader", "Protect self", "Scatter foes", "Stalk", "Steal from", "Swarm", "Target insolent", "Target leader", "Target nearest", "Target richest", "Target strongest", "Target weakest", "Toy with", "Use terrain"}

func GetMonsterTactic() string {
	return monsterTactics[rand.IntN(36)]
}

var monsterPersonalities = [...]string{"Alien", "Aloof", "Bored", "Cautious", "Cowardly", "Curious", "Devious", "Distractible", "Educated", "Embittered", "Envious", "Erudite", "Fanatical", "Forgetful", "Generous", "Hateful", "Honorable", "Humble", "Jaded", "Jovial", "Legalistic", "Manipulative", "Megalomaniac", "Melancholy", "Meticulous", "Mystical", "Obsessive", "Out of touch", "Paranoid", "Polite", "Psychopathic", "Sophisticated", "Touchy", "Unimpressed", "Vain", "Xenophobic"}

func GetMonsterPersonality() string {
	return monsterPersonalities[rand.IntN(36)]
}

var monsterWeaknesses = [...]string{"Bells", "Birdsong", "Children", "Cold", "Cold Iron", "Competition", "Conversation", "Deformity", "Flattery", "Flowers", "Gifts", "Gold", "Heat", "Holy icon", "Holy water", "Home cooking", "Insanities", "Mirrors", "Mistletoe", "Moonlight", "Music", "Methods", "Phylactery", "Physical Element", "Puzzles", "Riddles", "Rituals", "Silver", "Sunlight", "Tears", "True name", "Valuable Materials", "Weak spot", "Weapon Item", "Wine", "Wormwood"}

func GetMonsterWeakness() string {
	return monsterWeaknesses[rand.IntN(36)]
}

type MonsterAbilities struct {
	Power     int
	Strength  int
	Dexterity int
	Willpower int
	Attack    int
}

func GetMonsterAttributes() *MonsterAbilities {
	newPower := rand.IntN(20)
	total := 0
	attributes := [...]int{0, 0, 0, 0}

	for i := 0; i < 4; i++ {
		attributes[i] = rand.IntN(100)
		total += attributes[i]
	}

	return &MonsterAbilities{
		Power:     newPower,
		Strength:  int(attributes[0] / total * newPower),
		Dexterity: int(attributes[1] / total * newPower),
		Willpower: int(attributes[2] / total * newPower),
		Attack:    int(attributes[3] / total * newPower),
	}
}

type MonsterSizing struct {
	Size   string
	Health int
}

func GetMonsterSizing() *MonsterSizing {
	sizeChoice := rand.IntN(5)
	sizeWeighting := [...]int{1, 2, 3, 4, 6}
	return &MonsterSizing{
		Size:   monsterSize[sizeChoice],
		Health: rand.IntN(sizeWeighting[sizeChoice]*6) + 1,
	}
}

type Monster struct {
	Size         string
	HealthMax    int
	HealthLost   int
	Armor        int
	Power        int
	Strength     int
	Dexterity    int
	Willpower    int
	Attack       int
	Environments string
	Animals      string
	Feature      string
	Trait        string
	Ability      string
	Tactic       string
	Personality  string
	Weakness     string
}

func CreateMonster() Monster {
	newSizing := GetMonsterSizing()
	newAbilities := GetMonsterAttributes()
	return Monster{
		Size:         newSizing.Size,
		HealthMax:    newSizing.Health,
		HealthLost:   0,
		Armor:        6,
		Power:        newAbilities.Power,
		Attack:       newAbilities.Attack,
		Strength:     newAbilities.Strength,
		Dexterity:    newAbilities.Dexterity,
		Willpower:    newAbilities.Willpower,
		Environments: GetEnvironment(),
		Animals:      GetAnimalGround(),
		Feature:      GetMonsterFeature(),
		Trait:        GetMonsterTrait(),
		Ability:      GetMonsterAbility(),
		Tactic:       GetMonsterTactic(),
		Personality:  GetMonsterPersonality(),
		Weakness:     GetMonsterWeakness(),
	}
}
