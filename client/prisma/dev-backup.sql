PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('4e248410-362f-4eca-9b8d-a288d4697937','9bf2607121744df57be3691426d18a0ae4ad17eddf071f86b8b76d01cb7470f4',1699529119136,'20230628052405_init',NULL,NULL,1699529119130,1);
INSERT INTO _prisma_migrations VALUES('fd4eff01-e6f2-4ba5-9a33-c8c4a972879a','4049143e9c07d422323d1b1874786e6c83c5e31c93cbab0f532dc97e50ed8d21',1699529119144,'20230628052945_add_relations',NULL,NULL,1699529119137,1);
INSERT INTO _prisma_migrations VALUES('3fa2d23c-666e-415c-a4db-c25765c25fa6','23a75153d2176d0f017a9a284b524a9a4cfead7df497fb9876c3b90d09a28c96',1699529119148,'20230628153203_changed_monster_size_to_string',NULL,NULL,1699529119144,1);
INSERT INTO _prisma_migrations VALUES('cead4221-a1c1-441f-9772-a9a5ebd01b4f','ba510e5b923da3957538b2061fd7501556494ca3d3dffc9495e93ae908120eb9',1699529119150,'20230628161948_added_npcs',NULL,NULL,1699529119149,1);
INSERT INTO _prisma_migrations VALUES('3c731268-e38f-4fc6-a0f9-9f47eb323b4d','8a970cb3cc4479476b5680ee094c9d651655fe85ab4f4ca43097f59b3c76a42d',1699529119170,'20231002075037_review_oct_23',NULL,NULL,1699529119151,1);
INSERT INTO _prisma_migrations VALUES('897a5c2d-dfc4-4fe9-96a8-f5e372eed32a','89ba78348494eecfc334869194e46c8e3cddd43af29718bbe3c440c1d6c271b6',1699529119175,'20231002075438_messing',NULL,NULL,1699529119171,1);
INSERT INTO _prisma_migrations VALUES('d06bc6a2-9f90-4b05-aba9-0f19c8906165','a7be6cd4e09737e86d01f92477ae68d03d854e0e0ce048a945babbc319796f68',1699529119197,'20231002142732_restructure',NULL,NULL,1699529119175,1);
INSERT INTO _prisma_migrations VALUES('2575766d-516b-469b-9dac-565dac28ab26','271e54585db979d581ee0a1517313b3aaf02d8f6d47cdffc046e0a0e55487459',1699529119200,'20231002143505_combining_npc_and_player',NULL,NULL,1699529119198,1);
INSERT INTO _prisma_migrations VALUES('98a644e0-41da-4dd3-adb8-1c2c7f26232f','d128b63ee63069a6c3df2e2d65b9d644efccb03e43cdeddd3cc4e53732f8f760',1699529119204,'20231005153538_new_monster',NULL,NULL,1699529119201,1);
INSERT INTO _prisma_migrations VALUES('76a12015-f213-41f1-a930-d9afb1c4fc76','c0cfc9fb8daada78c5443d8a52c0f91d37cf4070981bbdf924fea3f06b325958',1699529119212,'20231009135207_added_spells',NULL,NULL,1699529119205,1);
INSERT INTO _prisma_migrations VALUES('64ea5fe2-ac7b-4535-a221-5f6238dd8449','619ff427dc7b82e7253597d7599a1b58249e23b28b76de1683b48de32d86be94',1699529119214,'20231010134817_removing_unique_tags',NULL,NULL,1699529119212,1);
INSERT INTO _prisma_migrations VALUES('7ad53c10-b5d6-4fb3-a871-ddd7c4c28a13','cb5ab83dfaabcb5924e200517bf509cb90454c70b8eb3b54870b07518a3ef2d2',1699529119218,'20231025150349_removing_foundation_link_with_scenario',NULL,NULL,1699529119215,1);
INSERT INTO _prisma_migrations VALUES('670d87bb-faa4-4c12-aab7-1b788d85f051','958400f15525e3a1c36e688f31a1bb7dd54efa02246b3efa1cfa817e20173e61',1699529119244,'20231026125638_adding_encounters',NULL,NULL,1699529119218,1);
INSERT INTO _prisma_migrations VALUES('9f5bd015-bc56-4d4f-814a-4b8c216bd7d1','a056908c80ff88d2cd20ff294621e8dce375ceffe9e573a50be972febe458629',1699529119246,'20231026125957_removed_foundation',NULL,NULL,1699529119244,1);
INSERT INTO _prisma_migrations VALUES('6daccc49-f64a-44b6-bc45-f01296713594','2fe0d406e2bbee32896ba41d49346698fa9e70184df4df6be9e70403c2c06943',1699529119249,'20231026131422_clearing_monsters',NULL,NULL,1699529119247,1);
INSERT INTO _prisma_migrations VALUES('9438811a-df43-47ac-91ea-c38dcb58f09e','a282a77d7833ca5143dce4bf60fc33957da8c908c1057752a15926963e2c8ede',1699529119251,'20231026131501_returned_monster_and_encounter_tables',NULL,NULL,1699529119249,1);
INSERT INTO _prisma_migrations VALUES('1fb24d0c-1f23-44c8-bcf0-659d96ec03ad','170fdd509d9b40238e0c40fe3c3606be61d56c5bc8bb340692f06f1cc1584fe3',1699529119257,'20231026133553_monster_encounter_bridge',NULL,NULL,1699529119252,1);
INSERT INTO _prisma_migrations VALUES('ad607d89-0cdb-49db-a2d4-3da339bc35ad','98a6c8aff9550ddf27805b0bc45dd9d7fe004c6d217f7fb8e1bbf872c525998b',1699529119264,'20231026133642_moved_lost_health_to_enc_instance',NULL,NULL,1699529119257,1);
INSERT INTO _prisma_migrations VALUES('25ab3db5-fc0a-42ed-bf49-eab544569659','25e8382c429840bbb5ca7b7f076d4f4224b32a216a322275d949e1a76c5e923d',1699529119271,'20231026133928_moved_name_to_encounter',NULL,NULL,1699529119265,1);
INSERT INTO _prisma_migrations VALUES('d76bb190-75a9-4078-8a29-de0334c3d912','00dc48497608278fa7111d6fd2374119b83ebb1208893813135ba46320e25595',1699529119281,'20231029050314_new_relations',NULL,NULL,1699529119272,1);
INSERT INTO _prisma_migrations VALUES('45b850e2-5764-4385-a469-f4fb721c6244','1da499a1596e1af6268b1b8eb3168c01bf35ff9a941783b97fe2a0cc605ae6f6',1699529119283,'20231029074218_added_items_to_characters',NULL,NULL,1699529119281,1);
INSERT INTO _prisma_migrations VALUES('8e803355-94a6-424b-8dcc-ee6acf11442d','5086edb433c4918e07c7221460c323692cba49761c4ed20da891d98961adc6ee',1699529119288,'20231029132722_adding_image_default',NULL,NULL,1699529119284,1);
INSERT INTO _prisma_migrations VALUES('6143f105-779c-470c-a0b6-d9b6b033967f','c1e0c8d7432dbca5cedf189c00601f56af563a86ef7945bf94f792cda91e7e8c',1699529119301,'20231105150930_adding_fields',NULL,NULL,1699529119288,1);
INSERT INTO _prisma_migrations VALUES('5ac81c0c-bcdb-4496-9735-755d6d94607c','ac8cbee64a044b7a7ca9100840bce822f8c69c416da714716850f934a174671f',1699529119303,'20231106084257_added_events',NULL,NULL,1699529119301,1);
INSERT INTO _prisma_migrations VALUES('df60890a-4b26-4893-88ab-8bcefc70fea9','e262945920be1d5a4358a9a5f2c02fd5bca5da65b2782b3ed1d7aac6ef001f3a',1699529119308,'20231109102907_added_char_attack',NULL,NULL,1699529119303,1);
INSERT INTO _prisma_migrations VALUES('44634123-184a-46b5-b681-481091a27997','ba7a7c427aa4ea307fefaf5b7dfcb11fdf34cd7757a67986558b5a2fb458f889',1699529119310,'20231109104216_added_character_relationship',NULL,NULL,1699529119309,1);
INSERT INTO _prisma_migrations VALUES('12b1af90-d5cd-4b8a-b89b-13b7daae3c19','aff5eafa6587225d0e7eaa1a9ba86f4fa479da9aa67fc751386710ba0aa49c57',1699529119328,'20231109105100_renaming_columns_db',NULL,NULL,1699529119311,1);
CREATE TABLE IF NOT EXISTS "Magic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "medium" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Magic VALUES(1,'Emetomancy - Vomit Magic','An Emetomancer is a master of their own chunder. Harnessing the raw potential of the gut, an Emetomancer may control their chunks with tele-emesis, melt objects with their heightened acidity and masters often have access to more eldritch abilities. Manipulation abilities dependent on Dex, power dependent on Wil Most abilities use 1 meal, others are explicitly stated','');
INSERT INTO Magic VALUES(2,'Uretic Dredgination','Dredgers have an almost unhealthy fascination with urea. As hoarders and hunters of rare specimens, they often spend hours at a time meditating and studying their collections, coming to  understand each specimen on an intrinsic level. This ability allows them to invoke abilities stored in their specimens.','');
INSERT INTO Magic VALUES(3,'Mental Restructuring','Granted by the Impulse drones, an increasing bonus over time to all mental capabilities at the cost of reduced agency.','');
INSERT INTO Magic VALUES(4,'Keratosis Potestas','','');
INSERT INTO Magic VALUES(5,'Earnest Novel','','');
CREATE TABLE IF NOT EXISTS "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "value" INTEGER NOT NULL DEFAULT 100
);
INSERT INTO Item VALUES(1,'Aes buds','plants adapted to live in the scoured sands, deep roots and a tough outer shell mean they can survive as the ferrous tides tear the surrounding landscape to pieces. Aes buds are unique. They accumulate the non-magnetic metals left behind by the tides and concentrate them in their outer shell.',100);
INSERT INTO Item VALUES(2,'Glisten & Turnip (Turn Up)','turnip alcohol, mixed with sugar, served with a hard toffee cap',100);
INSERT INTO Item VALUES(3,'Antibahá’íotics','offered to players by Lycan',100);
INSERT INTO Item VALUES(4,'Earnest novel','seen in Lycan’s pawn shop or LN’s HQ',100);
INSERT INTO Item VALUES(5,'Graijn','valuable seeds in plastic, found in Ferrous tides, can grow super healthy plants',100);
INSERT INTO Item VALUES(6,'Moyahasir','',100);
INSERT INTO Item VALUES(7,'Antiemetics and Antacids','Counter Emetomancy',100);
INSERT INTO Item VALUES(8,'Infinite hourglass','Pauses time for a while when placed so sands start falling',100);
INSERT INTO Item VALUES(9,'Detachable testicles','Offered by Lycan',100);
INSERT INTO Item VALUES(10,'Wizz tingle','',100);
INSERT INTO Item VALUES(11,'Inviolable Egg','',100);
INSERT INTO Item VALUES(12,'Orbs of Power','',100);
INSERT INTO Item VALUES(13,'This is just a long-ass name man','This is going to be a long ass description for testing amirght?',100);
CREATE TABLE IF NOT EXISTS "Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#D9D9D9',
    "icon" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Location VALUES(1,'Zephyr','Zephyr is a city of low-lying houses and lower lying dugouts, only the centre of the city has any building higher than 2 or 3 stories, and the vast majority of the city exists as a large slum.','#EFEC10','city');
INSERT INTO Location VALUES(2,'Crew Safehouse','You are all currently in the crew’s safehouse, a building that would be called a hovel in any other day or age. Consisting of a dugout covered with loosely affixed wooden boards and debris, there are some poorly made wooden chairs and a table and Eufrasio lies on of the 2 beds present, suffering but lucid enough to contribute to the conversation.','#782DD2','medical-house');
INSERT INTO Location VALUES(3,'Loboski''s Luxuries and Curios','A storefront packed high with all manner of items from the old world and the new. You almost can''t see through the windows. Making your way through the narrow stacks and myriad items feels almost like venturing into the lair of a predator and as you reach the back, the owner appears.','#87D22D','store');
INSERT INTO Location VALUES(4,'TAB HQ','A tall narrow building reminiscent of the leaning tower of Pisa, tall columns and flowing arches of wood and stone adorn the exterior while strong walls of carved wood decorate the spaces between and conceal the interior.','#1013EF','outpost');
INSERT INTO Location VALUES(5,'Arid Fields','The Arid fields are large swathes of land devoted to crop production, in areas fields of wheat and turnips stretch for miles among other less-definable plants.','#D9D9D9','warehouse');
INSERT INTO Location VALUES(6,'Khonsu’s Landing','Khonsu’s Landing is a small town primarily sustained by the practice of the locals to explore the ferrous tides and return with items of interest from the old world. Often found among the shifting grains are artefacts of all kinds of value, from old tools that have somehow survived the scouring nature of the tides and drifted unscathed to damaged pieces of ancient culture like books and musical instruments.  The locals live in small ramshackle buildings built from the detritus of their travels, you can see pieces of fibreglass, wood, stained glass and the discarded carapaces of some creature that calls the outer plateau its home.  The locals dress equally eclectic, often covering themselves in leathers and thick cloths to protect themselves from the sun and abrading sands, almost all have some kind of distinguishing clothing. INcluded among these are a man’s shoe made from some hardy looking fish-creature and a woman’s enormous scarf composed of denatured Lencer plumes. Most locals call themselves Waker’s as they ride on the metallic wake driven by the moon’s passage and are a close-knit community with all the drama you’d expect from a small town.','#D9D9D9','city');
INSERT INTO Location VALUES(7,'The Kicked Bucket','The premier place of gathering in town, the Kicked Bucket is one of the more cohesive buildings in town. Made almost entirely of whitened stone from a nearby quarry; it''s by far the tallest building in town at 3 stories.  The inside reveals the 3 floors are all part of the same large room, with balconies ringing an area in the middle where a number of drinking competitions are taking place. A bar sits at the back surrounded by the regulars drinking G&T.','#D9D9D9','store');
INSERT INTO Location VALUES(8,'Waker’s Dock','The Waker Docks are built over long rocky slides that slope down towards the shifting tides at a sharp angle, readied in the docks, you can see several ships. The Black Kettle, An aluminium amalgam Sloop, Its open top is tarnished and coloured a mottled black, while the lower part is a shining silver from being scoured and polished by the grains. Also tows a Rumbler made from 2 identical large shells attached together. Wailing Wakers, the Rumbler. Dusty’s Scourge, a Schooner with sparse red markings, as though scoured away by the sands. Lucretia’s Plea, a Sloop marked with the icon of the Amba brotherhood. Sal’s Sinker, A tumbler readied for outskirts trade.','#D9D9D9','boat');
INSERT INTO Location VALUES(9,'Isenberg','A drifting town riding the flows of the ferrous tides, potted plants and trade with other towns and passing ships sustains the berg.','#D9D9D9','boat');
INSERT INTO Location VALUES(10,'Rend','An unfortunate town sitting between 2 steep slopes, the bottom end of its valley is often covered by the tides and loose grains always end up in town. The high side of the valley has enough space for crops and the locals subsist on that and the occasional passing traveller.','#D9D9D9','city');
CREATE TABLE IF NOT EXISTS "Encounter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Encounter VALUES(1,'Arid Fields Lencers');
INSERT INTO Encounter VALUES(2,'Throngler Appears');
INSERT INTO Encounter VALUES(3,'Porpeosie Attack');
CREATE TABLE IF NOT EXISTS "_LocationToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LocationToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LocationToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _LocationToScenario VALUES(6,18);
INSERT INTO _LocationToScenario VALUES(7,18);
INSERT INTO _LocationToScenario VALUES(8,18);
INSERT INTO _LocationToScenario VALUES(9,18);
INSERT INTO _LocationToScenario VALUES(10,18);
CREATE TABLE IF NOT EXISTS "_CharacterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _CharacterToScenario VALUES(2,18);
INSERT INTO _CharacterToScenario VALUES(3,18);
INSERT INTO _CharacterToScenario VALUES(4,18);
INSERT INTO _CharacterToScenario VALUES(5,18);
INSERT INTO _CharacterToScenario VALUES(7,18);
INSERT INTO _CharacterToScenario VALUES(9,18);
INSERT INTO _CharacterToScenario VALUES(10,18);
INSERT INTO _CharacterToScenario VALUES(11,18);
CREATE TABLE IF NOT EXISTS "_EncounterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EncounterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Encounter" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EncounterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _EncounterToScenario VALUES(2,18);
INSERT INTO _EncounterToScenario VALUES(3,18);
CREATE TABLE IF NOT EXISTS "_ItemToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ItemToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _ItemToScenario VALUES(1,18);
INSERT INTO _ItemToScenario VALUES(2,18);
INSERT INTO _ItemToScenario VALUES(5,18);
INSERT INTO _ItemToScenario VALUES(9,18);
INSERT INTO _ItemToScenario VALUES(10,18);
INSERT INTO _ItemToScenario VALUES(11,18);
INSERT INTO _ItemToScenario VALUES(12,18);
CREATE TABLE IF NOT EXISTS "_MagicToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MagicToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Magic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MagicToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _MagicToScenario VALUES(1,18);
INSERT INTO _MagicToScenario VALUES(2,18);
INSERT INTO _MagicToScenario VALUES(3,18);
INSERT INTO _MagicToScenario VALUES(4,18);
CREATE TABLE IF NOT EXISTS "_CharacterToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO _CharacterToItem VALUES(2,1);
INSERT INTO _CharacterToItem VALUES(2,2);
INSERT INTO _CharacterToItem VALUES(2,3);
CREATE TABLE IF NOT EXISTS "Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT 'Default'
);
INSERT INTO Scenario VALUES(18,'Heist of Amba HQ','Getting back the Nomad','SunsetDesert');
INSERT INTO Scenario VALUES(19,'Eufrasio Falls','Afflicted with a mysterious disease','NeonCity');
INSERT INTO Scenario VALUES(20,'Race to the Buds','A new ability uncovered','IcelandLupin');
INSERT INTO Scenario VALUES(21,'Actaeon''s Flight','Help the tortured soul escape a hell of its own making','NeonCity');
INSERT INTO Scenario VALUES(22,'Twister Fling','A whirlwind romance','MistyValley');
INSERT INTO Scenario VALUES(23,'MR1 - Las Cuevas','Sombre hill caves','NightMountains');
INSERT INTO Scenario VALUES(24,'MR2 - Queen''s Call to Action','Over the last century, the Twisted Prince wrought havoc on the land, a sorcerer and necromancer of the highest order he brought cities to their knees and was on the verge of upsetting the local economy.  However, due to the tactical mastery of Queen Harlouse, the Twisted Prince was summarily defeated when she lured him and his army into a mountainous cul-de-sac.  The resulting fight was said to be as difficult as shooting fish in a barrel and was celebrated with a week of feasting hosted by the Queen herself.','NightMountains');
INSERT INTO Scenario VALUES(25,'MR3 - Warzone','A strange region has been discovered in the Alaskan Wilderness after a recent research outpost lost contact. Out in the hinterlands, an area has been covered by a fog-like veil, which has been steadily growing in size. After sending in a few scouting parties that ever returned, the people in charge resolve to send in the disposables.','MistyValley');
INSERT INTO Scenario VALUES(26,'MR4 - Luna’s Retribution/The City of Dirt and Wind','It remains a mystery who provoked or initiated world war 3 but its culmination is something well known. The attempted destruction of the moon, caused by someone''s misguided attempt to destroy another nation, resulted in enormous heat and energy being forced into Luna''s crust.   This mechanism reliquified the core and accelerated its internal magnetic dynamo. While humanity narrowly avoided outright annihilation as the magnetic forces the moon closer, the enormous magnetic flux tore down the cities of man through their steel skeletons and ground all of civilization''s achievements to dust.  The modern world bears little resemblance to the old, small pockets of civilization still exist but must work to survive on high plateaus and mountains as periodic tides of ferrous silt and rubble follow Luna’s influence across the planet, scouring everything in their paths.   The city of Zephyr sits atop a wide arid plateau. Known for its reliable arable land and constant piercing wind, it is an oasis amid barren valleys and plains. Tending to small farms and gathering amenities by searching the aftermath of the Ferrous Tides, the citizens of Zephyr manage to live their lives through hard labour without most of the luxuries of ages past.  (Zephyr is a city of around 50,000 people, although clear census has not been conducted in living memory)  The city is also home to a gang of idealists led by the charismatic Lucretia Nihilo, originally started by historians, it’s now known more for its extortion and minor criminal enterprise and goes by the name The Amba Brotherhood.','IcelandLupin');
INSERT INTO Scenario VALUES(27,'MR5 - The Ark of Cognizance','Space station collapse','NeonCity');
INSERT INTO Scenario VALUES(28,'MR6 - Legacy','4 Terrorists','SunsetDesert');
INSERT INTO Scenario VALUES(29,'Tornadus World','Cyclosis','MistyValley');
INSERT INTO Scenario VALUES(30,'Scale Distributed Portals','Here come the test results: You are a horrible person','IcelandLupin');
INSERT INTO Scenario VALUES(46,'tyui','oiuy','');
CREATE TABLE IF NOT EXISTS "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "Relationship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "character_id" INTEGER NOT NULL,
    CONSTRAINT "Relationship_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "magic_id" INTEGER NOT NULL,
    CONSTRAINT "Spell_magic_id_fkey" FOREIGN KEY ("magic_id") REFERENCES "Magic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO Spell VALUES(1,'Pisstallization','',2);
INSERT INTO Spell VALUES(2,'Flaming Phosphor','',2);
INSERT INTO Spell VALUES(3,'Marking Territory','',2);
INSERT INTO Spell VALUES(4,'Born to piss, forced to drink','',2);
INSERT INTO Spell VALUES(5,'Hydrotension','',2);
INSERT INTO Spell VALUES(6,'Kidney Overdrive','',2);
INSERT INTO Spell VALUES(7,'Soaking Splash','',2);
INSERT INTO Spell VALUES(8,'Frictionless Fly','',2);
INSERT INTO Spell VALUES(9,'Slippy Slick','',2);
INSERT INTO Spell VALUES(10,'Subtle Puddle','',2);
INSERT INTO Spell VALUES(11,'Discreet Demonstration','',2);
INSERT INTO Spell VALUES(12,'Urine Communion','',2);
INSERT INTO Spell VALUES(13,'Diuretic Domination','',2);
INSERT INTO Spell VALUES(14,'Wizztal Ball','',2);
INSERT INTO Spell VALUES(15,'Slash Summon','',2);
INSERT INTO Spell VALUES(16,'Tele-emesis','Practitioner can maintain telekinetic control over their vomit',1);
INSERT INTO Spell VALUES(17,'ShipHt','Practitioner can change the acidity of their gut',1);
INSERT INTO Spell VALUES(18,'Regurgitunnel','Practitioner may use 2 meals worth of vomit to create a temporary portal',1);
INSERT INTO Spell VALUES(19,'Spew surfer','Practitioner may use their tele-emesis as a vehicle of transport',1);
INSERT INTO Spell VALUES(20,'Corrosive cascade','Practitioner may release a short range cascade of highly corrosive bile',1);
INSERT INTO Spell VALUES(21,'Point projectile','Requires high manipulation, practitioner may precisely inflict damage',1);
INSERT INTO Spell VALUES(22,'Barf barrier','Practitioner may create a thick congealed barrier, blocking projectiles',1);
INSERT INTO Spell VALUES(23,'Pukesplosion','Practitioner may use all their meals to let loose a devastating AOE attack',1);
INSERT INTO Spell VALUES(24,'Violent upheaval','Practitioner may use all their meals to target 1 enemy',1);
INSERT INTO Spell VALUES(25,'Hyperemesis','Practitioner may store 1 more meal in their stomach',1);
INSERT INTO Spell VALUES(26,'Esophageal Resilience','Practitioner’s throat cannot be damaged by mundane means',1);
INSERT INTO Spell VALUES(27,'Gastric purge','Practitioner can completely empty their stomach to purge toxins',1);
CREATE TABLE IF NOT EXISTS "Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL DEFAULT '',
    "health_max" INTEGER NOT NULL DEFAULT 4,
    "armor" INTEGER NOT NULL DEFAULT 6,
    "str" INTEGER NOT NULL DEFAULT 0,
    "dex" INTEGER NOT NULL DEFAULT 0,
    "wil" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Typical',
    "attack" INTEGER NOT NULL DEFAULT 0,
    "tactics" TEXT NOT NULL DEFAULT '',
    "personality" TEXT NOT NULL DEFAULT '',
    "weakness" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Monster VALUES(1,'The Throngler','Deep in the sands',27,9,4,2,2,'Colossal',2,'','','');
INSERT INTO Monster VALUES(2,'Ethereal Stag','he Ethereal Stag is one of the ethereal conglomerates known to the people of Zephyr, it is incorporeal and appears a purple tinged outline of a stag. It often disappears into shadows and can duck into darkness to reappear elsewhere.  It cannot be hit by mundane weapons.',11,7,2,3,2,'Tough',2,'','','');
INSERT INTO Monster VALUES(3,'Porpeoisie','Dolphin-like creatures that rapidly burrow through the shifting grains using 2 chitinous appendages that extend from their long mouths lined with sharp teeth like prehensile tusks. Porpeoisie are blind and communicate and see through echolocation.  Their eyes are barely visible and almost entirely useless.  When attacking with magic, a green light emanates from holes going down their back and hurts the person they’re aiming at. Takes a turn to charge.',9,7,1,2,0,'Typical',1,'','','');
INSERT INTO Monster VALUES(4,'Lencer','Downy feathers in plumes behind them that sting their prey  Alcohol or piss is their weakness, it denatures their stings',2,6,0,3,0,'Weak',0,'','','');
CREATE TABLE IF NOT EXISTS "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL DEFAULT '',
    "xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,
    "health_max" INTEGER NOT NULL DEFAULT 4,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    "armor" INTEGER NOT NULL DEFAULT 6,
    "str" INTEGER NOT NULL DEFAULT 0,
    "dex" INTEGER NOT NULL DEFAULT 0,
    "wil" INTEGER NOT NULL DEFAULT 0,
    "att" INTEGER NOT NULL DEFAULT 0,
    "profession" TEXT NOT NULL DEFAULT '',
    "appearance" TEXT NOT NULL DEFAULT '',
    "physical_detail" TEXT NOT NULL DEFAULT '',
    "clothing" TEXT NOT NULL DEFAULT '',
    "personality" TEXT NOT NULL DEFAULT '',
    "mannerism" TEXT NOT NULL DEFAULT '',
    "npc" BOOLEAN NOT NULL DEFAULT true,
    "assets" TEXT NOT NULL DEFAULT '',
    "liabilities" TEXT NOT NULL DEFAULT '',
    "goals" TEXT NOT NULL DEFAULT '',
    "misfortunes" TEXT NOT NULL DEFAULT '',
    "missions" TEXT NOT NULL DEFAULT '',
    "secrets" TEXT NOT NULL DEFAULT '',
    "reputations" TEXT NOT NULL DEFAULT '',
    "hobbies" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Character VALUES(1,'Bozo Billby','Was a small rodent before becoming an adventurer',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(2,'Papa Golochevsky (Papa G)','hired to do a hit on the Amba brotherhood by the golden penalty, it went wrong. Being hunted by both parties now and in hiding',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','');
INSERT INTO Character VALUES(3,'Eufrásio Villapalos (Eufrásio)','fed a bad worm by the Amba gang part of initiation gone wrong and contract celebration gone wrong trans man',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','');
INSERT INTO Character VALUES(4,'Angussy (Gussy)','gullible male stripper who entered highway robbery to earn more money perfect distraction has no testicles',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','');
INSERT INTO Character VALUES(5,'Mohammed Mehmed Sigmalat (Meth Cigs)','pissé stockpiler, a firm believer in the curative powers of powdered urine always has a box on hand',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','');
INSERT INTO Character VALUES(6,'Lucretia Nihilo','Lucretia is an elegant woman, adorned with hundreds of wooden beads',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(7,'Bump Roberts','Long time lieutenant in the Amba Brotherhood',0,1,4,0,6,1,0,2,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(8,'Lichen Loboski','Born into the last Mosswolf family, Lichen has strived to reach capitalist success in Zephyr while maintaining the secret of his birth.',0,1,12,0,8,4,2,1,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(9,'The Tarnished Nomad','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(10,'Skeev Hanson','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(11,'Captain Nix Olshe','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(12,'Actaeon Irving','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(13,'Queen Harlouse','A master tactician and food enthusiast, after  defeating the Prince, she began looking for ways to expand her kingdom, she believes the Prince''s collection may hold some powerful tools.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(14,'The Twisted Prince','A powerful lich who collected objects both magical and mundane for centuries prior to trying to conquer the kingdom. Though defeated at the battle of ''corpses in a coffin'', his phylactery remains somewhere within his Stronghold.  Originally a grave robber who gathered trophies from his exploits, he happened upon the grave of an ancient lich and found texts detailing death magics. Practicing these while maintaining his old hobby, the Prince managed to accumulate a great mass of intriguing artifacts.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(15,'The Builder','Hired by a merchant to build a tavern and mercantile. Eager to talk',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(16,'Aimane Sonet','A Grizzled Warrior. After being injured early on in the Queen’s campaign against The Prince, this warrior is nevertheless a veteran and wants to prove himself by clearing the Prince’s Stronghold.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(17,'Kapitan','Captain in army, furious after losing men to anomaly. Eager to send in prisoners instead and will not hesitate to shoot deserters or escaping prisoners.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(18,'President Traitorous','Dictator of Megbellistan, survived through tactical backstabbing until overthrown by an alliance of his past enemies. Secretly captured by the CIA to be used in future government overthrow, but use has passed',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(19,'Valeriya Usmedivich','War Journalist, was documenting the war in Megbellistan when she was caught by soldiers testing biological weapons on civilians.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(20,'Martin (Marty) Christ','Con man and alleged direct descendant of Jesus. Considered too dangerous to be in the world at large, has started several cults',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(21,'Robert Jr','Bad omen for ending',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
INSERT INTO Character VALUES(22,'Hank Schrader','American Spy, found documents proving Putin’s sexually charged relationship with Lukashenko, very patriotic',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','');
CREATE TABLE IF NOT EXISTS "EncounterInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monster_id" INTEGER NOT NULL,
    "encounter_id" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "EncounterInstance_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "Monster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EncounterInstance_encounter_id_fkey" FOREIGN KEY ("encounter_id") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO EncounterInstance VALUES(1,4,1,0);
INSERT INTO EncounterInstance VALUES(2,4,1,1);
INSERT INTO EncounterInstance VALUES(3,1,2,0);
INSERT INTO EncounterInstance VALUES(4,3,3,0);
INSERT INTO EncounterInstance VALUES(5,3,3,0);
INSERT INTO EncounterInstance VALUES(6,3,3,0);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Magic',5);
INSERT INTO sqlite_sequence VALUES('Item',13);
INSERT INTO sqlite_sequence VALUES('Location',10);
INSERT INTO sqlite_sequence VALUES('Encounter',3);
INSERT INTO sqlite_sequence VALUES('EncounterInstance',6);
INSERT INTO sqlite_sequence VALUES('Scenario',46);
INSERT INTO sqlite_sequence VALUES('Monster',4);
INSERT INTO sqlite_sequence VALUES('Spell',27);
INSERT INTO sqlite_sequence VALUES('Character',22);
CREATE UNIQUE INDEX "Magic_name_key" ON "Magic"("name");
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");
CREATE UNIQUE INDEX "Encounter_name_key" ON "Encounter"("name");
CREATE UNIQUE INDEX "_LocationToScenario_AB_unique" ON "_LocationToScenario"("A", "B");
CREATE INDEX "_LocationToScenario_B_index" ON "_LocationToScenario"("B");
CREATE UNIQUE INDEX "_CharacterToScenario_AB_unique" ON "_CharacterToScenario"("A", "B");
CREATE INDEX "_CharacterToScenario_B_index" ON "_CharacterToScenario"("B");
CREATE UNIQUE INDEX "_EncounterToScenario_AB_unique" ON "_EncounterToScenario"("A", "B");
CREATE INDEX "_EncounterToScenario_B_index" ON "_EncounterToScenario"("B");
CREATE UNIQUE INDEX "_ItemToScenario_AB_unique" ON "_ItemToScenario"("A", "B");
CREATE INDEX "_ItemToScenario_B_index" ON "_ItemToScenario"("B");
CREATE UNIQUE INDEX "_MagicToScenario_AB_unique" ON "_MagicToScenario"("A", "B");
CREATE INDEX "_MagicToScenario_B_index" ON "_MagicToScenario"("B");
CREATE UNIQUE INDEX "_CharacterToItem_AB_unique" ON "_CharacterToItem"("A", "B");
CREATE INDEX "_CharacterToItem_B_index" ON "_CharacterToItem"("B");
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
COMMIT;
