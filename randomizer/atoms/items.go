package atoms

import (
	rand "math/rand/v2"
)

var itemTypes = [...]string{"Miscellaneous", "Worn", "Weapon", "Book", "Tool", "Potion", "Magical Ingredient", "Treasure", "Valuable Material"}

var miscellaneous = [...]string{"Bowl", "Brass Bell", "Brooch", "Carved Figurine", "Cup", "Deck of Cards", "Drawing", "Foreign Coin", "Game Piece", "Glass Eye", "Glass Jar", "Hair Comb", "Handkerchief", "Hinged Box", "Hourglass", "Human Tooth", "Hunting Horn", "Loaded Dice", "Long Fork", "Numbered Key", "Oil Lamp", "Old Doll", "Paint Pot", "Pencil", "Purse", "Quill Pen", "Salve", "Scissors", "Scroll", "Sealed Letter", "Sewing Needle", "Shaving Razor", "Silver Button", "Skull", "Tobacco Pipe", "Wine Bottle"}

func GetItemMiscellaneous() string {
	return miscellaneous[rand.IntN(len(miscellaneous))]
}

var worn = [...]string{"Belt", "Blouse", "Boots", "Bracelet", "Breastplate", "Brigandine", "Cincture", "Cloak", "Coat", "Dress", "Earring", "Eyepatch", "Gauntlets", "Glove", "Gown", "Hat", "Helmet", "Hose", "Leather Armor", "Locket", "Mail Shirt", "Mask", "Necklace", "Padded Armor", "Plate Mail", "Ring", "Robe", "Sandals", "Scarf", " Shirt", "Shoes", "Skirt", "Slippers", "Socks", "Trousers", "Veil"}

func GetItemWorn() string {
	return worn[rand.IntN(len(worn))]
}

var weapons = [...]string{"Arming Sword", "Backsword", "Battleaxe", "Blowpipe", "Claymore", "Club", "Crossbow", "Cutlass", "Dagger", "Flail", "Flanged Mace", "Glaive", "Halberd", "Hammer", "Hatchet", "Horsebow", "Hunting Knife", "Lance", "Longbow", "Longsword", "Mace", "Maul", "Morningstar", "Pike", "Scimitar", "Shortbow", "Sickle", "Sling", "Spear", "Staff", "Stake", "Stiletto", "Throwing Axe", "Warhammer", "Warpick", "Whipe"}

func GetItemWeapon() string {
	return weapons[rand.IntN(len(weapons))]
}

var bookSubjects = [...]string{"Alchemy", "Art", "Astrology", "Blackmail", "Charts & Maps", "Conspiracies", "Cookbook", "Criminals", "Divination", "Etiquette", "Fashion", "Genealogy", "Hagiography", "History", "Journal", "Language", "Laws", "Letters", "Lost Empires", "Lost Places", "Love Poems", "Monsters", "Mythology", "Odd Customs", "Oratory", "Propaganda", "Prophecies", "Siegecraft", "Songs", "State Secrets", "Sword Fighting", "Theology", "Treasures", "War Chronicle", "Who's Who", "Witch Hunting"}

func GetBookSubject() string {
	return bookSubjects[rand.IntN(len(bookSubjects))]
}

var tools = [...]string{"Acid Flask", "Bear Trap", "Bellows", "Bolt-Cutters", "Chain", "Chisel", "Crowbar", "Door Ram", "Ear Trumpet", "Fire Oil", "Fishing Hook", "Goggles", "Grappling Hook", "Grease", "Hacksaw", "Hammer", "Hand Drill", "Lantern", "Lens", "Lock/Key", "Lockpicks", "Manacles", "Metal File", "Mortar/Pestle", "Needle", "Pickaxe", "Pitchfork", "Pliers", "Pole", "Pulleys", "Rope", "Scissors", "Shovel", "Spikes", "Steel Wire", "Tongs"}

func GetItemTool() string {
	return tools[rand.IntN(len(tools))]
}

var potions = [...]string{"Animal-Form", "Body Swap", "Camouflage", "Control Animals", "Control ELement", "Cure Affliction", "Detect Evil", "Detect Gold", "Detect Hidden", "Direction Sense", "Element-Form", "Element-Skin", "Extra Arm", "Flight", "Ghost Speech", "Heat Vision", "Insanity", "Invulnerable", "Item-Form", "Magic Immunity", "Mirror Image", "Monster Ability", "Monster Feature", "Monster Trait", "Mutation", "Night Vision", "Random Spell", "Restore Health", "Speed", "Stretchy", "Super-Jump", "Super-Strength", "Telekinesis", "Tongues", "Water-Breathing", "Water-Walking"}

func GetItemPotion() string {
	return potions[rand.IntN(len(potions))]
}

var magicalIngredients = [...]string{"Ancient Liquor", "Animal", "Blind Eye", "Boiled Cat", "Book Page", "Bottled Fog", "Coffin Nail", "Corpse Hair", "Crossroad Dust", "Cultist Entrails", "Edible Plant", "Exotic Spice", "Killer's Hand", "King's Tooth", "Last Breath", "Liar's Tongue", "Lightning Bolt", "Lodestone", "Monk's Vow", "Monster Feature", "Newborn's Cry", "Oil Portrait", "Physical Element", "Poisonous Plant", "Potion", "Pyre Ember", "Queen Bee", "Queen's Blood", "Ships's Barnacle", "Star-Metal", "Thief's Finger", "Tomb Flower", "Valuable Material", "Wedding Ring", "Widow's Tears", "Wizard Skull"}

func GetItemMagicalIngredient() string {
	return magicalIngredients[rand.IntN(len(magicalIngredients))]
}

var treasures = [...]string{"Alchemy Recipe", "Amulet", "Astrolabe", "Blueprints", "Calligraphy", "Carpet", "Compass", "Contract", "Crown", "Crystal", "Deed", "Embroidery", "Fine China", "Fine Liquor", "Instrument", "Magical Book", "Microscope", "Music Box", "Orrery", "Painting", "Perfume", "Prayer Book", "Printing Block", "Rare Textile", "Royal Robes", "Saint's Relic", "Scrimshaw", "Sextant", "Sheet Music", "Signet Ring", "Silverware", "Spices", "Spyglass", "Tapestry", "Telescope", "Treasure Map"}

func GetItemTreasure() string {
	return treasures[rand.IntN(len(treasures))]
}

var treasureTraits = [...]string{"Altered", "Ancient", "Blessed", "Bulky", "Compact", "Consumable", "Cultural Value", "Cursed", "Damaged", "Disguised", "Draw Enemies", "Effect", "Element", "Embellished", "Encoded", "Exotic", "Extra-Planar", "Famous", "Forbidden", "Fragile", "Heavy", "Immovable", "Impractical", "Indestructible", "Intelligent", "Masterwork", "Military Value", "Non-Human", "Owned", "Partial", "Political Value", "Religious Value", "Repaired", "Royal", "Toxic", "Vile"}

func GetItemTreasureTrait() string {
	return treasureTraits[rand.IntN(len(treasureTraits))]
}

var valuableMaterials = [...]string{"Alabaster", "Amber", "Aquamarine", "Azurite", "Beryl", "Black Pearl", "Bloodstone", "Bone China", "Chalcedony", "Cinnabar", "Coral", "Diamond", "Ebony", "Emerald", "Fire Agate", "Garnet", "Gold", "Ivory", "Jade", "Jasper", "Jet", "Lapis Lazuli", "Malachite", "Moonstone", "Onyx", "Opal", "Pearl", "Platinum", "Porcelain", "Ruby", "Sapphire", "Serpentine", "Silver", "Star Iron", "Topaz", "Turquoise"}

func GetValuableMaterial() string {
	return valuableMaterials[rand.IntN(len(valuableMaterials))]
}

func CreateItem() string {
	var newItem string
	switch itemTypes[rand.IntN(len(itemTypes))] {
	case "miscellaneous":
		newItem = miscellaneous[rand.IntN(len(miscellaneous))]
	}
	return newItem
}
