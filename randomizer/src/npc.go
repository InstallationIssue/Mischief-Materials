package main

import (
	rand "math/rand/v2"
)

var npcAssets = [...]string{"Authority", "Avoids detection", "Calls in favors", "Charming", "Cooks the books", "Erases evidence", "Excellent liar", "Extremely rich", "Faction leader", "Faction member", "Feared", "Fortified base", "Gorgeous", "Hears rumors", "Huge family", "Huge library", "Impersonator", "Interrogator", "Knows a guy", "Knows a way in", "Launders money", "Learned", "Local celebrity", "Local knowledge", "Loyal henchman", "Middling oracle", "Nothing to lose", "Owns the guards", "Powerful spouse", "Procures gear", "Pulls the strings", "Secret lab", "Sells contraband", "Smuggles goods", "Spy network", "War hero"}

func getAsset() string {
	return npcAssets[rand.IntN(len(npcAssets))]
}

var npcLiabilities = [...]string{"Addiction", "Alcoholic", "Corrupt ally", "Coward", "Decadent", "Forbidden love", "Gambler", "Glutton", "Greedy", "Heretic", "Huge debts", "Imposter", "Insanity", "Jealous", "Leaves evidence", "Many enemies", "Misinformed", "Money trail", "Narcissist", "Needs medicine", "OCD", "Paranoid", "Partyer", "Poor equipment", "Protective", "Scandalous", "Softhearted", "Strict routines", "Superstitious", "Suspicious", "Temper", "Trusting", "Vulnerable base", "Wanted", "Weak-willed", "Widely despised"}

func getLiability() string {
	return npcLiabilities[rand.IntN(len(npcLiabilities))]
}

var npcGoals = [...]string{"A better life", "Acceptance", "Acquire item", "Craft item", "Destroy faction", "Destroy item", "Enlightenment", "Fame", "Found faction", "Freedom", "Glory", "Impress NPC", "Infamy", "Infiltrate faction", "Justice", "Kidnap NPC", "Lead faction", "Learning", "Locate NPC", "Love", "Mastery", "Power", "Reach location", "Rescue NPC", "Resolve dispute", "Restore faction", "Reveal a secret", "Revenge", "Sabotage faction", "Serve a deity", "Serve evil", "Serve faction", "Serve ideology", "Serve leader", "Serve the needy", "Wealth"}

func getGoal() string {
	return npcGoals[rand.IntN(len(npcGoals))]
}

var npcMisfortunes = [...]string{"Abandoned", "Addicted", "Arrested", "Blackmailed", "Burgled", "Challenged", "Condemnede", "Crippled", "Cursed", "Defrauded", "Demoted", "Depressed", "Discredited", "Dismissed", "Disowned", "Exiled", "Famished", "Forgotten", "Framed", "Haunted", "Humiliated", "Impoverished", "Kidnapped", "Lost", "Mobbed", "Mutilated", "Overworked", "Poisoned", "Pursued", "Rejected", "Replace", "Robbed", "Sick", "Sued", "Suspected", "Transformed"}

func getMisfortune() string {
	return npcMisfortunes[rand.IntN(len(npcMisfortunes))]
}

var npcMissions = [...]string{"Apprehend", "Assassinate", "Blackmail", "Burgle", "Chart", "Convince", "Deface", "Defraud", "Deliver", "Destroy", "Discredit", "Escort", "Exfiltrate", "Extort", "Follow", "Frame", "Impersonate", "Impress", "Infiltrate", "Interrogate", "Investigate", "Kidnap", "Locate", "Plant", "Protect", "Raid", "Replace", "Retrieve", "Rob", "Ruin", "Sabotage", "Smuggle", "Surveil", "Take over", "Terrorize", "Threaten"}

func getMission() string {
	return npcMissions[rand.IntN(len(npcMissions))]
}

var npcMethods = [...]string{"Alchemy", "Blacmail", "Bluster", "Bribery", "Bullying", "Bureaucracy", "Charm", "Commerce", "Cronies", "Debate", "Deceit", "Deduction", "Eloquence", "Espionage", "Fast-talking", "Favors", "Hard work", "Humor", "Investigation", "Legal maneuvers", "Manipulation", "Misdirection", "Money", "Nagging", "Negotiation", "Persistence", "Piety", "Preparation", "Quick wit", "Research", "Rumors", "Sabotage", "Teamwork", "Theft", "Threats", "Violence"}

func getMethod() string {
	return npcMethods[rand.IntN(len(npcMethods))]
}

var npcSecrets = [...]string{"Addicted", "Artificial", "Assassin", "Bankrupt", "Beholden", "Counterspy", "Cultist", "Demigod", "Evil lineage", "Exile", "Fence", "Fugitive", "Ghost", "Has a child", "Heretic", "High born", "Huge fortune", "Illusion", "Insurrectionist", "Low born", "Married", "Mind-controlled", "Misfortune", "Monster hunter", "Non-human", "NPC", "Polygamist", "Protects relic", "Scandalous birth", "Secret police", "Serial killer", "Smuggler", "Spy", "Time traveller", "Transformed", "War criminal"}

func getSecret() string {
	return npcSecrets[rand.IntN(len(npcSecrets))]
}

var npcReputations = [...]string{"Ambitious", "Authoritative", "Boor", "Borrower", "Celebrity", "Charitable", "Cheat", "Dangerous", "Entertainer", "Gossip", "Hardworking", "Holy", "Honest", "Hypochondriac", "Idiot", "Influential", "Layabout", "Leader", "Misanthrope", "Miser", "Neighborly", "Nutjob", "Obnoxious", "Overeducated", "Partyer", "Pious", "Proper", "Prophet of doom", "Repulsive", "Respected", "Riffraff", "Scandalous", "Slime ball", "Terrifying", "Weirdo", "Wise"}

func getReputation() string {
	return npcReputations[rand.IntN(len(npcReputations))]
}

var npcHobbies = [...]string{"Archaeology", "Art collecting", "Bad fiction", "Calligraphy", "Card games", "Clockwork", "Collecting cats", "Cuisine", "Dark lore", "Dog breeding", "Embroidery", "Exercise", "Falconry", "Fashion", "Fishing", "Foreign cultures", "Gardening", "History", "Horseracing", "Hunting", "Instrument", "Knitting", "Lawn games", "Mountaineering", "Opera", "Painting", "Poetry", "Puzzle-solving", "Riddling", "Science", "Sculpture", "Sketching", "Smoking", "Theater", "Weaving", "Whiskey"}

func getHobby() string {
	return npcHobbies[rand.IntN(len(npcHobbies))]
}

var npcRelationships = [...]string{"Adviser", "Blackmailer", "Business partner", "Business rival", "Buyer", "Captor", "Client", "Confidant", "Debtor", "Disciple", "Guardian", "Henchman", "Idol", "Informant", "Master", "Mentor", "Nemesis", "Offspring", "Parent", "Patron", "Political rival", "Prisoner", "Protege", "Quarry", "Right hand", "Romantic rival", "Servant", "Sibling", "Social rival", "Spouse", "Stalker", "Suitor", "Supplicant", "Supplier", "Sweetheart", "Unrequited love"}

func getRelationship() string {
	return npcRelationships[rand.IntN(len(npcRelationships))]
}

var divineDomains = [...]string{"Animal", "Balance", "Betrayal", "Chance", "Chaos", "Conquest", "Cycles", "Death", "Destiny", "Dreams", "Element", "Gateways", "Judgement", "Love", "Memory", "Monsters", "Moon", "Motherhood", "NPC", "Oaths", "Order", "Plague", "Purification", "Reason", "Schemes", "Secrets", "Storms", "Summer", "Sun", "The Forge", "The Sea", "The Wild", "Time", "Underworld", "Wealth", "Winter"}

func getDivineDomain() string {
	return divineDomains[rand.IntN(len(divineDomains))]
}

var afterPartyDisasters = [...]string{"Absurd boasts", "Adopted a child", "Awarded medal", "Bought the inn", "Cursed", "Duel scheduled", "Elected to office", "Given a quest", "Got married", "In a coffin", "In love", "In the stocks", "Inconvenient pet", "Insulted a noble", "Insulted faction", "Joined a cult", "Letter of thanks", "Lost", "Lost at gambling", "Lost reputation", "New identity", "New tattoo", "Poisoned", "Recruited", "Robbed", "Roof on fire", "Shanghaied", "Sick", "Signed contract", "Someone died", "Spilled secrets", "Started a cult", "Swindled", "Thrown in jail", "Unruly mob", "Wrong clothes"}

func getAfterPartyDisaster() string {
	return afterPartyDisasters[rand.IntN(len(afterPartyDisasters))]
}

type Npc struct {
	Asset        string
	Liability    string
	Goal         string
	Misfortune   string
	Mission      string
	Method       string
	Secret       string
	Reputation   string
	Hobby        string
	Relationship string
}

func createNpc() *Npc {
	return &Npc{
		Asset:        getAsset(),
		Liability:    getLiability(),
		Goal:         getGoal(),
		Misfortune:   getMisfortune(),
		Mission:      getMission(),
		Method:       getMethod(),
		Secret:       getSecret(),
		Reputation:   getReputation(),
		Hobby:        getHobby(),
		Relationship: getRelationship(),
	}
}
