package main

import (
	rand "math/rand/v2"
)

// The City

var cityThemes = [...]string{"Animal", "Aristocracy", "Art", "Bureaucracy", "Castes", "Catacombs", "City Activity", "City Event", "Crime Families", "Cruelty", "District Theme", "Divine Domain", "Faction", "Festivals", "Feuds", "Intrigue", "Lower Class Building", "Martial Law", "Meritocracy", "NPC", "Opulence", "Physical Element", "Pilgrimages", "Piracy", "Plutocracy", "Poverty", "Rituals", "Slavery", "Spices", "Theocracy", "Thievery", "Trade", "Tyranny", "Upper Class Building", "Wizardry", "Xenophobia"}

func GetCityTheme() string {
	return cityThemes[rand.IntN(len(cityThemes))]
}

var cityEvents = [...]string{"Assassination", "Carnival", "Conscription", "Coronation", "Coup", "Cult Activity", "Curfew", "Discovery", "Earthquake", "Faction War", "Fashion Trend", "Fire", "Flood", "Heavy Fog", "Heavy Taxes", "Holy Day", "Hysteria", "Inquisition", "Insurrection", "Invasion", "Jailbreak", "Mass Eviction", "Mass Pardon", "Negotiations", "Plague", "Proclamation", "Prohibition", "Public Games", "Refugees", "Rioting", "Roundup", "Scandal", "Serial Killer", "Shortage", "Tournament", "Trial"}

func GetCityEvent() string {
	return cityEvents[rand.IntN(len(cityEvents))]
}

var districtThemes = [...]string{"Catacombs", "Civilized NPCs", "Construction", "Crafts", "Criminality", "Culture", "Dining", "Education", "Entertainment", "Finance", "Foreigners", "Ghettoes", "Government", "Graveyards", "Green Space", "Industrialization", "Judgement", "Livestock", "Lower Class Building", "Marketplace", "Memorials", "Military", "Opulence", "Pollution", "Poverty", "Punishment", "Religion", "Science", "Trade", "Trash", "Underworld NPCs", "Upper Class Building", "Vices", "Wilderness NPCs", "Wizardry", "Wonders"}

func GetDistrictTheme() string {
	return districtThemes[rand.IntN(len(districtThemes))]
}

var buildingsUpperClass = [...]string{"Academy", "Alchemist", "Archive", "Art Dealer", "Barber", "Bookbinder", "Bookseller", "Castle", "Clockmaker", "Clothier", "Courthouse", "Furrier", "Gallery", "Garden", "Haberdashery", "Jeweler", "Law Office", "Locksmith", "Lounge", "Manor", "Museum", "Observatory", "Opera House", "Park", "Physician", "Printer", "Public Baths", "Restaurant", "Salon", "Stables", "Taxidermist", "Temple", "Tobacconist", "Townhouse", "Winery", "Zoo"}

func GetBuildingUpperClass() string {
	return buildingsUpperClass[rand.IntN(len(buildingsUpperClass))]
}

var buildingsLowerClass = [...]string{"Apothecary", "Asylum", "Baker", "Brewery", "Butcher", "Candlemaker", "Catacombs", "Cheesemaker", "Criminal Den", "Curiosity Shop", "Dock", "Fighting Pit", "Forge", "Fortuneteller", "Gambling Hall", "Leatherworks", "Marketplace", "Mason", "Mill", "Moneylender", "Orphanage", "Outfitter", "Prison", "Sewers", "Shipyards", "Shrine", "Stockyard", "Stonecarver", "Tattooist", "Tavern", "Theater", "Veterinarian", "Warehouse", "Watchtower", "Weaver", "Workshop"}

func GetBuildingLowerClass() string {
	return buildingsLowerClass[rand.IntN(len(buildingsLowerClass))]
}

var cityActivities = [...]string{"Abduct", "Beg", "Brawl", "Burgle", "Celebrate", "Chase", "Construct", "Cook", "Dance", "Duel", "Dungeon Activity", "Execute", "Extinguish", "Extort", "Follow", "Gamble", "Haul", "Interrogate", "Marry", "Mission", "Mourn", "Party", "Patrol", "Perform", "Play", "Preach", "Process", "Proclaim", "Protest", "Release", "Repair", "Riot", "Rob", "Search", "Sell", "Wilderness Activity"}

func GetCityActivity() string {
	return cityActivities[rand.IntN(len(cityActivities))]
}

var buildingRooms = [...]string{"Arboretum", "Atrium", "Attic", "Aviary", "Ballroom", "Baths", "Bed Chamber", "Cabinet", "Chapel", "Cloakroom", "Dining Room", "Dressing Room", "Dungeon Room", "Garden", "Garret", "Greenhouse", "Junk Room", "Kitchen", "Larder", "Library", "Map Room", "Menagerie", "Mews", "Nursery", "Pantry", "Parlor", "Privy", "Root Cellar", "Saucery", "Scullery", "Smoking Room", "Spicery", "Still Room", "Study", "Trophy Room", "Wardrobe"}

func GetBuildingRoom() string {
	return buildingRooms[rand.IntN(len(buildingRooms))]
}

var tacticalFeaturesStreet = [...]string{"Arcade", "Awnings", "Balconies", "Barricades", "Bridge", "Canal", "Carriages", "Catwalks", "City Activity", "Climbable Walls", "Clotheslines", "Crowd", "Dead End", "Dense Fog", "Downpour", "Dungeon Activity", "Flooding", "Food Stalls", "Fountain", "Gates", "Ladders", "Livestock", "Muddy", "Overgrown", "Roof Access", "Roof Gardens", "Sewer Access", "Sinkhole", "Slick", "Steep Roofs", "Steep Streets", "Steps", "Torn Up Street", "Vermin Swarms", "Well", "Wilderness Activity"}

func GetTacticalFeatureStreet() string {
	return tacticalFeaturesStreet[rand.IntN(len(tacticalFeaturesStreet))]
}

var tacticalFeaturesBuilding = [...]string{"Animal Nests", "Balconies", "Basement Access", "Brightly Lit", "Broken Furniture", "Broken Glass", "Cabinets", "Carpeted Floors", "Chandeliers", "Crawlspaces", "Drain Pipes", "Dumbwaiters", "Echoing Marble", "Hanging Chains", "Huge Fireplace", "Narrow Ledges", "Open Windows", "Ornate Weapons", "Overgrown", "Patrols", "Piles of Trash", "Pillars", "Rotting Ceiling", "Rotting Floors", "Rotting Walls", "Screens", "Servant Passages", "Sewer Access", "Shadowy Alcoves", "Skylights", "Spyholes", "Staircases", "Tall Bookshelves", "Unlit", "Watchdogs", "Window Drapes"}

func GetTacticalFeatureBuilding() string {
	return tacticalFeaturesBuilding[rand.IntN(len(tacticalFeaturesBuilding))]
}

var factions = [...]string{"Art Movement", "Beggar's Guild", "Black Market", "Brotherhood", "City Guard", "Conspiracy", "Craft Guild", "Crime Family", "Crime Ring", "Dark Cult", "Explorer's Club", "Free Company", "Gourmand Club", "Heist Crew", "Heretical Sect", "High Council", "Hired Killers", "Local Militia", "National Church", "Noble House", "Outlander Clan", "Outlaw Gang", "Political Party", "Religious Order", "Religious Sect", "Resistance", "Royal Army", "Royal House", "Scholar's Circle", "Secret Society", "Spy Network", "Street Artists", "Street Gang", "Street Musicians", "Theater Troupe", "Trade Company"}

func GetFaction() string {
	return factions[rand.IntN(len(factions))]
}

var factionTraits = [...]string{"Bankrupt", "Bureaucratic", "Charitable", "Confused", "Connected", "Corrupt", "Decadent", "Decaying", "Delusional", "Divided", "Dwindling", "Efficient", "Esoteric", "Expanding", "Hunted", "Incompetent", "Incorruptible", "Insane", "Insular", "Manipulative", "Martial", "Personality", "Pious", "Popular", "Righteous", "Ruthless", "Secret", "Subversive", "Suppressed", "Threatened", "Thriving", "Unpopular", "Up-and-coming", "Wealthy", "Well-prepared", "Xenophobic"}

func GetFactionTrait() string {
	return factionTraits[rand.IntN(len(factionTraits))]
}

var factionGoals = [...]string{"Advise Leader", "Avoid Detection", "Awaken Being", "Collect Artifacts", "Construct Base", "Control Faction", "Control Politics", "Create Artifact", "Create Monster", "Defeat Faction", "Defend Borders", "Defend Leader", "Destroy Artifacts", "Destroy Being", "Destroy Villain", "Enforce Law", "Enrich Members", "Entertain", "Exchange Goods", "Hear Rumors", "Indulge Tastes", "Infiltrate Faction", "Map the Wild", "Overthrow Order", "Preserve Lineage", "Preserve Lore", "Produce Goods", "Promote Arts", "Promote Craft", "Purge Traitors", "Sell Services", "Share Knowledge", "Spread Beliefs", "Summon Evil", "Survive", "Transport Goods"}

func GetFactionGoal() string {
	return factionGoals[rand.IntN(len(factionGoals))]
}

// The Wild

var wildRegions = [...]string{"Ashy", "Badlands", "Bay", "Beach", "Delta", "Desert", "Dry lands", "Dune sea", "Dust bowl", "Fjords", "Flood lands", "Foothills", "Forest", "Glaciers", "Heath", "Highlands", "Hills", "Ice fields", "Jungle", "Lowlands", "Mesas", "Moor", "Mountains", "Petrified forest", "Plains", "Rainforest", "Riverlands", "Salt pan", "Savanna", "Steppe", "Taiga", "Thickets", "Tundra", "Volcanic plain", "Wetlands", "Woodlands"}

func GetWildRegion() string {
	return wildRegions[rand.IntN(len(wildRegions))]
}

var wildLandmarks = [...]string{"Bog", "Boulder field", "Butte", "Cave", "Cliff", "Crag", "Crater", "Creek", "Crossing", "Ditch", "Field", "Forest", "Grove", "Hill", "Hollow", "Hot springs", "Lair", "Lake", "Lakebed", "Marsh", "Mesa", "Moor", "Pass", "Pit", "Pond", "Rapids", "Ravine", "Ridge", "Rise", "River", "Rockslide", "Spring", "Swamp", "Thickets", "Valley", "Waterfall"}

func GetWildLandmark() string {
	return wildLandmarks[rand.IntN(len(wildLandmarks))]
}

var wildStructures = [...]string{"Altar", "Aqueduct", "Bandit's camp", "Battlefield", "Bonfire", "Bridge", "Cairn", "Crossroads", "Crypt", "Dam", "Dungeon", "Farm", "Ford", "Fortress", "Gallows", "Graveyard", "Hedge", "Hunter's camp", "Inn", "Lumber camp", "Mine", "Monastery", "Monument", "Orchard", "Outpost", "Pasture", "Ruin", "Seclusion", "Shack", "Shrine", "Standing stone", "Temple", "Village", "Wall", "Watchtower", "Waystone"}

func GetWildStructure() string {
	return wildStructures[rand.IntN(len(wildStructures))]
}

var wildTraits = [...]string{"Ashen", "Blasted", "Blighted", "Broken", "Consuming", "Corrupted", "Creeping", "Desolate", "Dungeon Trait", "Eternal", "Ethereal Effect", "Forsaken", "Frozen", "Haunted", "Howling", "Jagged", "Lonely", "Misty", "Perilous", "Petrified", "Phantasmal", "Ravenous", "Savage", "Shadowy", "Shifting", "Shivering", "Sinister", "Sinking", "smoldering", "Sweltering", "Thorny", "Thundering", "Torrential", "Physical Effect", "Wandering", "Withered"}

func GetWildTrait() string {
	return wildTraits[rand.IntN(len(wildTraits))]
}

var wildDiscoveries = [...]string{"Blood stains", "Bones", "Broken weapons", "Burrow", "City Activity", "Civilized NPC", "Cut ropes", "Dead animal", "Dungeon Activity", "Food scraps", "Grave marker", "Human corpse", "Item", "Lost NPC", "Magical Effect", "Map", "Message", "Migration", "Mutation", "Nest", "Portal", "Resources", "Rift", "Strange plant", "Stunned NPC", "Supplies", "Torn flag", "Tracks", "Trap", "Treasure cache", "Underworld NPC", "Wild Activity", "Wild Landmark", "Wild Structure", "Wild NPC", "Wizard fight"}

func GetWildDiscovery() string {
	return wildDiscoveries[rand.IntN(len(wildDiscoveries))]
}

var wildActivities = [...]string{"Ambush", "Argument", "Birth", "Build", "Bury", "Capture", "City Activity", "Convene", "Demolish", "Die", "Duel", "Dungeon Activity", "Eat", "Excavate", "Feast", "Felling", "Fish", "Flee", "Forage", "Hunt", "March", "Raid", "Rescue", "Rest", "Sacrifice", "Scout", "Sing", "Skin", "Skirmish", "Slay", "Sleep", "Swim", "Track", "Trap", "Wander", "Worship"}

func GetWildActivity() string {
	return wildActivities[rand.IntN(len(wildActivities))]
}

var wildHazards = [...]string{"Avalanche", "Blizzard", "Brushfire", "Cloudburst", "Cyclone", "Dense fog", "Downpour", "Drizzle", "Dust storm", "Earthquake", "Eruption", "Flooding", "Forest fire", "Hail", "Heatwave", "Hurricane", "Ice storm", "Light mist", "Locust swarm", "Magma flow", "Meteor strike", "Monsoon", "Mudflow", "Mudslide", "Predator", "Quicksand", "Rain of frogs", "Rockslide", "Sandstorm", "Sleet", "Snow", "Stampede", "Thunderstorm", "Tsunami", "Whirlpool", "Windstorm"}

func GetWildHazard() string {
	return wildHazards[rand.IntN(len(wildHazards))]
}

var plantsEdible = [...]string{"Acorns", "Apples", "Asparagus", "Blackberris", "Blueberries", "Carrots", "Cattail", "Cherries", "Chickweed", "Chicory", "Clover", "Dandelion", "Dead-nettle", "Elderberries", "Fireweed", "Gooseberries", "Hazelnuts", "Henbit", "Hickory nuts", "Honeysuckle", "Leeks", "Milk thistle", "Mint", "Mulberries", "Mushrooms", "Mustard", "Onion", "Pecans", "Persimmons", "Raspberries", "Strawberries", "Walnuts", "Watercress", "Wild garlic", "Wild grapes", "Wood sorrel"}

func GetPlantEdible() string {
	return plantsEdible[rand.IntN(len(plantsEdible))]
}

var plantsPoisonous = [...]string{"Angel's Trumpet", "Baneberry", "Belladona", "Black Truffle", "Bleeding Heart", "Celandine", "Cocklebur", "Columbine", "Crowncup", "Death cap", "Dumbcane", "Foxglove", "Hemlock", "Hogweed", "Holly", "Horse Chestnut", "Hyacinth", "Ivy", "Jessamine", "Kudu", "Larkspur", "Mandrake", "Mangrove", "Mistletoe", "Moonflower", "Nightshade", "Oleander", "Ragwort", "Reindeer Lichen", "Snakeweed", "Spindle", "Stinkhorn", "Waxcap", "Winecap", "Wolfsbane", "Wormwood"}

func GetPlantPoisonous() string {
	return plantsPoisonous[rand.IntN(len(plantsPoisonous))]
}

var innAdjectives = [...]string{"Bellowing", "Blazing", "Bleak", "Blessed", "Bloody", "Crimson", "Cunning", "Copper", "Dancing", "Dead", "Drunken", "Flying", "Ghastly", "Golden", "Helpful", "Hideous", "Howling", "Hungry", "Moldy", "Muttering", "Nimble", "Oozing", "Petrified", "Prancing", "Romantic", "Salty", "Singing", "Shivering", "Shrieking", "Silver", "Smoking", "Thirsty", "Wicked", "Tipsy", "Whistling", "Wanton"}

func GetInnAdjective() string {
	return innAdjectives[rand.IntN(len(innAdjectives))]
}

var innNouns = [...]string{"Axe", "Barrel", "Bear", "Bell", "Boot", "Bowl", "Bucket", "Candle", "Cock", "Cow", "Dragon", "Egg", "Elephant", "Flea", "Fork", "Giant", "Griffin", "Hart", "Hog", "Hound", "Lamb", "Lion", "Mackerel", "Maid", "Monk", "Moon", "Pipe", "Prince", "Rat", "Skull", "Spoon", "Star", "Swan", "Sword", "Whale", "Wife"}

func GetInnNoun() string {
	return innNouns[rand.IntN(len(innNouns))]
}

var innQuirks = [...]string{"100 years in the past", "Always night", "Animal fights", "Bard duels", "Bigger inside", "Blackmarket", "Brand new", "Cannibals", "City Activity", "Constant party", "Dancing contest", "Dead drop", "Dungeon Form", "Expensive", "Faction hangout", "Faction Trait", "Famous chef", "Fey patrons", "Fight club", "Five floors", "Ghost staff", "Haunted", "Hideout", "Inn/Building", "Magic sword", "Magically moves", "Mercs for hire", "NPC hangout", "Preaching", "Secure storage", "Staff are kids", "Talking painting", "Underground", "VIP lounge", "Voice in well", "Women only"}

func GetInnQuirk() string {
	return innQuirks[rand.IntN(len(innQuirks))]
}

// The Maze

var dungeonEntrances = [...]string{"All libraries", "Beaver dam", "Behind waterfall", "Chalk rectangle", "Chest bottom", "Chimney", "Cupboard", "Dolmen shadow", "Down a well", "Fiery pit", "Fog road", "Forest spring", "Giant book", "Gypsy wagon", "Hollow tree", "Huge keyhole", "Iron maiden", "Living tattoo", "Magic painting", "Man-shape hole", "Maze potion", "Mirror", "Monster mouth", "Monster wound", "Narrow alley", "Rain door", "Sewer grate", "Sudden rift", "Tidal cave", "Tower top", "Tree roots", "Under the bed", "Unfolded map", "Up a tree", "Whirlpool", "Wine barrel"}

func GetDungeonEntrance() string {
	return dungeonEntrances[rand.IntN(len(dungeonEntrances))]
}

var dungeonForms = [...]string{"Arena", "Asylum", "Aviary", "Bank", "Baths", "Body", "Building Room", "Casino", "Catacombs", "Cave", "Court", "Dungeon Room", "Forge", "Garden", "Hideout", "Hotel", "Lower Class Building", "Laboratory", "Library", "Market", "Mine", "Monastery", "Museum", "Nursery", "Orphanage", "Palace", "Prison", "Sewer", "Ship", "Slave pit", "Temple", "Theater", "Upper Class Building", "University", "Vault", "Zoo"}

func GetDungeonForm() string {
	return dungeonForms[rand.IntN(len(dungeonForms))]
}

var dungeonLayouts = [...]string{"Ant colony", "Central hub", "Claustrophobic", "Crisscrossing", "Curved", "Disorienting", "Galleria", "Geometric", "Gonzo", "Haphazard", "Highly regular", "Honeycomb", "Intertwined", "Isolated wings", "Layered", "Linear", "Loops", "Many corridors", "Mazes", "Mix of layouts", "Multiple hubs", "No corridors", "Open plan", "Open voids", "Organic", "Oversized", "Recursive", "Repetitive", "Sprawling", "Suspended", "Symbol shape", "Tall and narrow", "Themed zones", "Vertical", "Winding", "Ziggurat"}

func GetDungeonLayout() string {
	return dungeonLayouts[rand.IntN(len(dungeonLayouts))]
}

var dungeonRuinations = [...]string{"Arcane disaster", "Army invasion", "Cannibalism", "Civil war", "Collapse", "Crystal growth", "Curse", "Degeneration", "Earthquake", "Eruption", "Evil unearthed", "Experiments", "Explosion", "Famine", "Fire", "Flooding", "Fungus", "Haunting", "Ice", "Insanity", "Lava flow", "Magical sleep", "Melted", "Monster attack", "Mutation", "Outsider attack", "Overgrowth", "Petrification", "Plague", "Planar overlay", "Poison gas", "Resources gone", "Revolt", "Risen dead", "Too many traps", "War"}

func GetDungeonRuination() string {
	return dungeonRuinations[rand.IntN(len(dungeonRuinations))]
}

var dungeonRewards = [...]string{"Ancient lore", "Animal ally", "Army", "Blessing", "Blueprints", "Cultural artifact", "Enemy weakness", "Faction ally", "Forewarning", "Guide", "Holy relic", "Influential ally", "Jewels", "Key", "Lost formula", "Machine", "Magic Item", "Magical ally", "Map", "Marital ally", "Masterpiece", "Monster ally", "Oracle", "Piles of loot", "Planar portal", "Prophecy", "Renown", "Spell", "Transformation", "Transport", "Treasure Item", "Uncovered plot", "Valuable Material", "Vision", "Weapon"}

func GetDungeonReward() string {
	return dungeonRewards[rand.IntN(len(dungeonRewards))]
}

var dungeonActivities = [...]string{"Besiege", "Capture", "City Activity", "Collect", "Construct", "Control", "Deliver", "Demolish", "Escape", "Feed", "Fortify", "Guard", "Hide", "Hunt", "Loot", "Map", "Mine", "Monster Tactic", "Negotiate", "Patrol", "Perform ritual", "Purge", "Question", "Raid", "Repair", "Rescue", "Research", "Revive", "Riddle", "Scavenge", "Seize", "Tunnel", "Unearth", "Vandalize", "Wild Activity", "Worship"}

func GetDungeonActivity() string {
	return dungeonActivities[rand.IntN(len(dungeonActivities))]
}

var dungeonRooms = [...]string{"Armory", "Banquet hall", "Barracks", "Building Room", "Catacombs", "Cavern", "Chasm", "Courtyard", "Crypt", "Dormitory", "Fighting pit", "Forge", "Fountain", "Gate house", "Guard room", "Kennel", "Lower Class Building", "Laboratoy", "Mess hall", "Mine shaft", "Museum", "Oubliette", "Pool", "Prison", "Record room", "Shrine", "Slaughterhouse", "Stables", "Storeroom", "Throne room", "Torture room", "treasury", "Upper Class Building", "Vault", "Well", "Workshop"}

func GetDungeonRoom() string {
	return dungeonRooms[rand.IntN(len(dungeonRooms))]
}

var dungeonDetails = [...]string{"Bas-relief", "Blood trail", "Bones", "Chains", "Chalk marks", "Claw marks", "Corpses", "Cracked beams", "Crumbling walls", "Decaying food", "Decaying nest", "Dripping water", "Fading murals", "Faint breeze", "Faint footsteps", "Fallen pillars", "Fungus", "Furniture", "Graffiti", "Mosaics", "Recent repairs", "Rotting books", "Rubble", "Shed skin", "Slime trails", "Spider webs", "Stalactites", "Stench", "Smoke stains", "Thick dust", "Torn clothes", "Tree roots", "Unusual smell", "Vibrations", "Vines", "Whispers"}

func GetDungeonDetail() string {
	return dungeonDetails[rand.IntN(len(dungeonDetails))]
}

var dungeonTricks = [...]string{"Absorption", "Activation", "Animation", "Blessings", "Communication", "Confusion", "Consumption", "Creation", "Curses", "Deception", "Duplication", "Ethereal Effect", "Exchange", "Imprisonment", "Instructions", "Interrogation", "Mind-control", "Mission", "Mood-alteration", "Nullification", "Physical Effect", "Planeshift", "Protection", "Rejuvenation", "Release", "Reversal", "Rotation", "Scrying", "Size-alteration", "Summoning", "Theft", "Time-alteration", "Transformation", "Transmutation", "Transportation", "Wonder"}

func GetDungeonTrick() string {
	return dungeonTricks[rand.IntN(len(dungeonTricks))]
}

var dungeonHazards = [...]string{"Acid drip", "Bloodsuckers", "Cave-in", "Choking dust", "Crude oil", "Crystal shards", "Deafening noise", "Dense fog", "Ensnaring vines", "Fallen floor", "Flooding", "Freezing", "ZGeysers", "Magma", "Magnetic field", "Mud flow", "Narrow ledge", "Narrow passage", "Poison goo", "Poison plants", "Precipice", "Quicksand", "Radiation", "Rockslide", "Rotten ceiling", "Rotten floor", "Sinkhole", "Slippery slope", "Spider webs", "Spores", "Steam vents", "Strong winds", "Tar pit", "Tight passage", "Toppling object", "Toxic fumes"}

func GetDungeonHazard() string {
	return dungeonHazards[rand.IntN(len(dungeonHazards))]
}

var trapEffects = [...]string{"Acid pool", "Adhesive", "Alarm", "Armor melts", "Bear trap", "Blinding spray", "Blunt pendulum", "Boiling tar", "Collapsing floor", "Crocodile pit", "Crushing walls", "Deep pit", "Falling cage", "Falling ceiling", "Fills with sand", "Flooding", "Giant magnet", "Hard vacuum", "Lava flow", "Lightning", "Living statues", "Missile fire", "Monster freed", "Net trap", "Pendulum blade", "Poison gas", "Poison needle", "Quicksand", "Rage gas", "Rolling boulder", "Room freezes", "Room on fire", "Sleeping gas", "Spiked pit", "Tombs open", "Wall spikes"}

func GetTrapEffect() string {
	return trapEffects[rand.IntN(len(trapEffects))]
}

var trapTriggers = [...]string{"Blow", "Break", "Burn", "Choice", "Countdown", "Darkness", "Drain", "Eat", "Insert", "Kill", "Knock", "Light", "Magic", "Melody", "Noise", "Open", "Phrase", "Pour", "Press", "Proximity", "Pull", "Read", "Reflect", "Release", "Remove", "Retrieve", "Rudeness", "Shut", "Sit", "Sleep", "Slide", "Touch", "Turn", "Unbalance", "Unearth", "Write"}

func GetTrapTrigger() string {
	return trapTriggers[rand.IntN(len(trapTriggers))]
}

func GetLocation() string {
	return ""
}

func GetPlant() string {
	return ""
}

func GetInn() string {
	return ""
}

func GetDungeon() string {
	return ""
}

func GetTrap() string {
	return ""
}
