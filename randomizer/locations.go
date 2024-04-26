package main

import (
	rand "math/rand/v2"
)

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

var factions = [...]string{"Art Movement", "Beggar's Guild", "Black Market"}

func GetFaction() string {
	return factions[rand.IntN(len(factions))]
}

var factionTraits = [...]string{""}

func GetFactionTrait() string {
	return factionTraits[rand.IntN(len(factionTraits))]
}

var factionGoals = [...]string{""}

func GetFactionGoal() string {
	return factionGoals[rand.IntN(len(factionGoals))]
}
