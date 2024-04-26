package main

import (
	rand "math/rand/v2"
)

var spellOptions = [12][2]int{
	{0, 2},
	{0, 5},
	{3, 2},
	{3, 5},
	{1, 2},
	{1, 5},
	{4, 2},
	{4, 5},
	{0, 1},
	{0, 4},
	{3, 1},
	{3, 4},
}

var spellFormulas = [...]string{"Physical Effect", "Physical Element", "Physical Form", "Ethereal Effect", "Ethereal Element", "Ethereal Form"}

var physicalEffects = [...]string{"Animating", "Attracting", "Binding", "Blossoming", "Consuming", "Creeping", "Crushing", "Diminishing", "Dividing", "Duplicating", "Enveloping", "Expanding", "Fusing", "Grasping", "Hastening", "Hindering", "Illuminating", "Imprisoning", "Levitating", "Opening", "Petrifying", "Phasing", "Piercing", "Pursuing", "Reflecting", "Regenerating", "Rending", "Repelling", "Resurrecting", "Screaming", "Sealing", "Shapeshifting", "Shielding", "Spawning", "Transmuting", "Transporting"}

func GetSpellEffectPhysical() string {
	return physicalEffects[rand.IntN(len(physicalEffects))]
}

var physicalElements = [...]string{"Acid", "Amber", "Bark", "Blood", "Bone", "Brine", "Clay", "Crow", "Crystal", "Ember", "Flesh", "Fungus", "Glass", "Honey", "Ice", "Insect", "Lemon", "Lava", "Moss", "Obsidian", "Oil", "Poison", "Rat", "Salt", "Sand", "Sap", "Serpent", "Slime", "Stone", "Tar", "Thorn", "Vine", "Water", "Wine", "Wood", "Worm"}

func GetSpellElementPhysical() string {
	return physicalElements[rand.IntN(len(physicalElements))]
}

var physicalForms = [...]string{"Altar", "Armor", "Arrow", "Beast", "Blade", "Cauldron", "Chain", "Chariot", "Claw", "Cloak", "Colossus", "Crown", "Elemental", "Eye", "Fountain", "Gate", "Golem", "Hammer", "Horn", "Key", "Mask", "Monolith", "Pit", "Prison", "Sentinel", "Servant", "Shield", "Spear", "Steed", "Swarm", "Tentacle", "Throne", "Torch", "Trap", "Wall", "Web"}

func GetSpellFormPhysical() string {
	return physicalForms[rand.IntN(len(physicalForms))]
}

var etherealEffects = [...]string{"Avenging", "Banishing", "Bewildering", "Blinding", "Charming", "Communicating", "Compelling", "Concealing", "Deafening", "Deceiving", "Deciphering", "Disguising", "Dispelling", "Emboldening", "Encoding", "Energizing", "Enlightening", "Enraging", "Excruciating", "Foreseeing", "Intoxicating", "Maddening", "Mesmerizing", "Mindreading", "Nullifying", "Paralyzing", "Revealing", "Revolting", "Scrying", "Silencing", "Soothing", "Summoning", "Terrifying", "Warding", "Wearying", "Withering"}

func GetSpellEffectEthereal() string {
	return etherealEffects[rand.IntN(len(etherealEffects))]
}

var etherealElements = [...]string{"Ash", "Chaos", "Distortion", "Dream", "Dust", "Echo", "Ectoplasm", "Fire", "Fog", "Ghost", "Harmony", "Heat", "Light", "Lightning", "Memory", "Mind", "Mutation", "Negation", "Plague", "Plasma", "Probability", "Rain", "Rot", "Shadow", "Smoke", "Snow", "Soul", "Star", "Stasis", "Steam", "Thunder", "Time", "Void", "Warp", "Whisper", "Wind"}

func GetSpellElementEthereal() string {
	return etherealElements[rand.IntN(len(etherealElements))]
}

var etherealForms = [...]string{"Aura", "Beacon", "Beam", "Blast", "Blob", "Bolt", "Bubble", "Call", "Cascade", "Circle", "Cloud", "Coil", "Cone", "Cube", "Dance", "Disk", "Field", "Form", "Gaze", "Loop", "Moment", "Nexus", "Portal", "Pulse", "Pyramid", "Ray", "Shard", "Sphere", "Spray", "Storm", "Swarm", "Torrent", "Touch", "Vortex", "Wave", "Word"}

func GetSpellFormEthereal() string {
	return etherealForms[rand.IntN(len(etherealForms))]
}

// Curses or magical backfire
var mutations = [...]string{"Aging", "Attracts birds", "Child-form", "Corpulence", "Covered in hair", "Animal arms", "Animal eyes", "Animal head", "Animal legs", "Animal mouth", "Animal skin", "Animal form", "Cyclops", "Extra arms", "Extra eyes", "Extra legs", "Forked tongue", "Gender swap", "Hunchback", "Item form", "Long arms", "Lose all hair", "Lose teeth", "Monster feature", "Monster trait", "No eyes", "No mouth", "Physical element skin", "Second face", "Sheds skin", "Shrinks", "Shrivels", "Skin boils", "Slime trail", "Translucent skin", "Weeps blood"}

func GetMutation() string {
	return mutations[rand.IntN(len(mutations))]
}

// Character affliction
var insanities = [...]string{"Always lies", "Always polite", "Animal form belief", "Cannot count", "Cannot lie", "Faceblind", "Fears birds", "Fears blood", "Fears books", "Fears darkness", "Fears fire", "Fears gold", "Fears horses", "Fears iron", "Fears music", "Fears own hand", "Fears player character", "Fears rain", "Fears rivers", "Fears silence", "Fears sleep", "Fears sunlight", "Fears the moon", "Fears trees", "Genius belief", "Gorgeous belief", "Hates violence", "Invisibility belief", "Invulnerability belief", "Monster ability belief", "Monster feature belief", "Monster trait belief", "Must sing", "New personality", "Says thoughts", "Sees dead people"}

func GetInsanity() string {
	return insanities[rand.IntN(len(insanities))]
}

// Magical Catastrophes or indicators of disaster
var omens = [...]string{"All iron rusts", "Animals die", "Animals mutate", "Birds attack", "City appears", "Deadly fog", "Dream plague", "Endless night", "Endless rain", "Endless storm", "Endless twilight", "Endless winter", "Fae return", "Forest appears", "Forgetfulness", "Graves open", "Lamentations", "Maggots", "Mass insanity", "Mass mutation", "Mass slumber", "Meteor strike", "Mirrors speak", "No stars", "Outsider enters", "People shrink", "People vanish", "Plants wither", "Portal opens", "Rifts open", "Shadows speak", "Space distorts", "Stones speak", "Total silence", "Tower appears", "Water to blood"}

func GetOmen() string {
	return omens[rand.IntN(len(omens))]
}

type Spell struct {
	Name    string
	Formula string
}

func CreateSpell() Spell {
	formulaChoice := spellOptions[rand.IntN(len(spellOptions))]
	var newFormula, newName string
	for i := 0; i < 2; i++ {
		newFormula += spellFormulas[formulaChoice[i]]
		switch formulaChoice[i] {
		case 0:
			newName += GetSpellEffectPhysical()
		case 1:
			newName += GetSpellElementPhysical()
		case 2:
			newName += GetSpellFormPhysical()
		case 3:
			newName += GetSpellEffectEthereal()
		case 4:
			newName += GetSpellElementEthereal()
		case 5:
			newName += GetSpellFormEthereal()
		}
		if i == 0 {
			newFormula += " : "
			newName += " "
		}
	}
	return Spell{
		Name:    newName,
		Formula: newFormula,
	}
}
