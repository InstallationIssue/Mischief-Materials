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
INSERT INTO _prisma_migrations VALUES('c80f452a-2bc4-49ae-b332-397e84ae7399','9bf2607121744df57be3691426d18a0ae4ad17eddf071f86b8b76d01cb7470f4',1687929845467,'20230628052405_init',NULL,NULL,1687929845462,1);
INSERT INTO _prisma_migrations VALUES('8d37a7a7-1657-40b7-9cc8-08e6b03670a6','4049143e9c07d422323d1b1874786e6c83c5e31c93cbab0f532dc97e50ed8d21',1687930185666,'20230628052945_add_relations',NULL,NULL,1687930185658,1);
INSERT INTO _prisma_migrations VALUES('4aef87b9-1c23-40c6-a87f-272b5b3e07aa','23a75153d2176d0f017a9a284b524a9a4cfead7df497fb9876c3b90d09a28c96',1687966323606,'20230628153203_changed_monster_size_to_string',NULL,NULL,1687966323600,1);
INSERT INTO _prisma_migrations VALUES('ebb10bec-0bdd-49cb-b692-4ad922733e6c','ba510e5b923da3957538b2061fd7501556494ca3d3dffc9495e93ae908120eb9',1687969188131,'20230628161948_added_npcs',NULL,NULL,1687969188128,1);
INSERT INTO _prisma_migrations VALUES('5d8eee43-80b8-46c5-a504-95ebfe040ef2','8a970cb3cc4479476b5680ee094c9d651655fe85ab4f4ca43097f59b3c76a42d',1696233037988,'20231002075037_review_oct_23',NULL,NULL,1696233037970,1);
INSERT INTO _prisma_migrations VALUES('0ad4519c-4def-4325-9956-a6a79b0f3b11','89ba78348494eecfc334869194e46c8e3cddd43af29718bbe3c440c1d6c271b6',1696233278823,'20231002075438_messing',NULL,NULL,1696233278818,1);
INSERT INTO _prisma_migrations VALUES('b734f5be-56ea-4cb8-976a-d432b29655d9','a7be6cd4e09737e86d01f92477ae68d03d854e0e0ce048a945babbc319796f68',1696256852498,'20231002142732_restructure',NULL,NULL,1696256852475,1);
INSERT INTO _prisma_migrations VALUES('17ab81d7-ba41-4f12-bb56-11e4f744938b','271e54585db979d581ee0a1517313b3aaf02d8f6d47cdffc046e0a0e55487459',1696257305061,'20231002143505_combining_npc_and_player',NULL,NULL,1696257305056,1);
INSERT INTO _prisma_migrations VALUES('4e1ed268-3858-4192-b49f-979d9d67f179','d128b63ee63069a6c3df2e2d65b9d644efccb03e43cdeddd3cc4e53732f8f760',1696520138465,'20231005153538_new_monster',NULL,NULL,1696520138459,1);
INSERT INTO _prisma_migrations VALUES('4a2d46d6-7265-4a5d-89e2-646f754c2317','c0cfc9fb8daada78c5443d8a52c0f91d37cf4070981bbdf924fea3f06b325958',1696859527766,'20231009135207_added_spells',NULL,NULL,1696859527754,1);
INSERT INTO _prisma_migrations VALUES('765be864-bf6b-4dba-90ae-ebc741be7e4f','619ff427dc7b82e7253597d7599a1b58249e23b28b76de1683b48de32d86be94',1696945697384,'20231010134817_removing_unique_tags',NULL,NULL,1696945697381,1);
INSERT INTO _prisma_migrations VALUES('f4e69f04-fa50-4cf8-88ed-58aec369bc7d','cb5ab83dfaabcb5924e200517bf509cb90454c70b8eb3b54870b07518a3ef2d2',1698246229079,'20231025150349_removing_foundation_link_with_scenario',NULL,NULL,1698246229073,1);
INSERT INTO _prisma_migrations VALUES('0444df25-1c55-4fda-8257-f1c747cfa3d9','958400f15525e3a1c36e688f31a1bb7dd54efa02246b3efa1cfa817e20173e61',1698324998282,'20231026125638_adding_encounters',NULL,NULL,1698324998252,1);
INSERT INTO _prisma_migrations VALUES('03cfc152-f85e-497b-aa01-b2e4365ba554','a056908c80ff88d2cd20ff294621e8dce375ceffe9e573a50be972febe458629',1698325197964,'20231026125957_removed_foundation',NULL,NULL,1698325197961,1);
INSERT INTO _prisma_migrations VALUES('4132190d-2e6c-4070-9777-24f466d091f0','2fe0d406e2bbee32896ba41d49346698fa9e70184df4df6be9e70403c2c06943',1698326062282,'20231026131422_clearing_monsters',NULL,NULL,1698326062278,1);
INSERT INTO _prisma_migrations VALUES('313ea209-52c4-4d76-829c-d549c64d7966','a282a77d7833ca5143dce4bf60fc33957da8c908c1057752a15926963e2c8ede',1698326101225,'20231026131501_returned_monster_and_encounter_tables',NULL,NULL,1698326101221,1);
INSERT INTO _prisma_migrations VALUES('ea47a26c-e5d7-416d-b960-150fa4372c62','170fdd509d9b40238e0c40fe3c3606be61d56c5bc8bb340692f06f1cc1584fe3',1698327353655,'20231026133553_monster_encounter_bridge',NULL,NULL,1698327353648,1);
INSERT INTO _prisma_migrations VALUES('545a4109-ad5f-4231-a594-a85519a1c7f8','98a6c8aff9550ddf27805b0bc45dd9d7fe004c6d217f7fb8e1bbf872c525998b',1698327402720,'20231026133642_moved_lost_health_to_enc_instance',NULL,NULL,1698327402711,1);
INSERT INTO _prisma_migrations VALUES('bddf085a-330b-41b6-842c-26a4af0f2806','25e8382c429840bbb5ca7b7f076d4f4224b32a216a322275d949e1a76c5e923d',1698327568899,'20231026133928_moved_name_to_encounter',NULL,NULL,1698327568889,1);
INSERT INTO _prisma_migrations VALUES('651c2c4b-77f3-47f7-bf16-1f8f48a2dbb9','00dc48497608278fa7111d6fd2374119b83ebb1208893813135ba46320e25595',1698555794716,'20231029050314_new_relations',NULL,NULL,1698555794704,1);
INSERT INTO _prisma_migrations VALUES('5cdfca8c-7afe-446b-a4b7-badce4990dba','1da499a1596e1af6268b1b8eb3168c01bf35ff9a941783b97fe2a0cc605ae6f6',1698565338440,'20231029074218_added_items_to_characters',NULL,NULL,1698565338437,1);
INSERT INTO _prisma_migrations VALUES('ed32eca1-43af-4335-99d5-c778eefd0054','5086edb433c4918e07c7221460c323692cba49761c4ed20da891d98961adc6ee',1698586042270,'20231029132722_adding_image_default',NULL,NULL,1698586042262,1);
INSERT INTO _prisma_migrations VALUES('0c12f938-cd3e-4fa0-b8cd-f02bb33b2229','c1e0c8d7432dbca5cedf189c00601f56af563a86ef7945bf94f792cda91e7e8c',1699196970688,'20231105150930_adding_fields',NULL,NULL,1699196970672,1);
INSERT INTO _prisma_migrations VALUES('8379edde-719b-48cc-bc38-7bbd10adcd64','ac8cbee64a044b7a7ca9100840bce822f8c69c416da714716850f934a174671f',1699260177256,'20231106084257_added_events',NULL,NULL,1699260177252,1);
INSERT INTO _prisma_migrations VALUES('60033bed-4ba4-4dea-826c-68f945840689','e262945920be1d5a4358a9a5f2c02fd5bca5da65b2782b3ed1d7aac6ef001f3a',1699525747087,'20231109102907_added_char_attack',NULL,NULL,1699525747079,1);
INSERT INTO _prisma_migrations VALUES('d7bebe87-fbb8-4dbd-90b1-d28c9e99a0b3','ba7a7c427aa4ea307fefaf5b7dfcb11fdf34cd7757a67986558b5a2fb458f889',1699526536504,'20231109104216_added_character_relationship',NULL,NULL,1699526536501,1);
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
CREATE TABLE IF NOT EXISTS "EncounterInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monsterId" INTEGER NOT NULL,
    "encounterId" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "EncounterInstance_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "Monster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EncounterInstance_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO EncounterInstance VALUES(1,4,1,0);
INSERT INTO EncounterInstance VALUES(2,4,1,1);
INSERT INTO EncounterInstance VALUES(3,1,2,0);
INSERT INTO EncounterInstance VALUES(4,3,3,0);
INSERT INTO EncounterInstance VALUES(5,3,3,0);
INSERT INTO EncounterInstance VALUES(6,3,3,0);
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
    "weakness" TEXT NOT NULL DEFAULT '',
    "encounterId" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO Monster VALUES(1,'The Throngler','Deep in the sands',27,9,4,2,2,'Colossal',2,'','','',1);
INSERT INTO Monster VALUES(2,'Ethereal Stag','he Ethereal Stag is one of the ethereal conglomerates known to the people of Zephyr, it is incorporeal and appears a purple tinged outline of a stag. It often disappears into shadows and can duck into darkness to reappear elsewhere.  It cannot be hit by mundane weapons.',11,7,2,3,2,'Tough',2,'','','',1);
INSERT INTO Monster VALUES(3,'Porpeoisie','Dolphin-like creatures that rapidly burrow through the shifting grains using 2 chitinous appendages that extend from their long mouths lined with sharp teeth like prehensile tusks. Porpeoisie are blind and communicate and see through echolocation.  Their eyes are barely visible and almost entirely useless.  When attacking with magic, a green light emanates from holes going down their back and hurts the person they’re aiming at. Takes a turn to charge.',9,7,1,2,0,'Typical',1,'','','',1);
INSERT INTO Monster VALUES(4,'Lencer','Downy feathers in plumes behind them that sting their prey  Alcohol or piss is their weakness, it denatures their stings',2,6,0,3,0,'Weak',0,'','','',1);
CREATE TABLE IF NOT EXISTS "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "magicId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Spell_magicId_fkey" FOREIGN KEY ("magicId") REFERENCES "Magic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
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
CREATE TABLE IF NOT EXISTS "Event" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
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
    "hobbies" TEXT NOT NULL DEFAULT '',
    "relationships" TEXT NOT NULL DEFAULT ''
);
INSERT INTO Character VALUES(1,'Bozo Billby','Was a small rodent before becomingan adventurer',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(2,'Papa Golochevsky (Papa G)','hired to do a hit on the Amba brotherhood by the golden penalty, it went wrong. Being hunted by both parties now and in hiding',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','','');
INSERT INTO Character VALUES(3,'Eufrásio Villapalos (Eufrásio)','fed a bad worm by the Amba gang part of initiation gone wrong and contract celebration gone wrong trans man',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','','');
INSERT INTO Character VALUES(4,'Angussy (Gussy)','gullible male stripper who entered highway robbery to earn more money perfect distraction has no testicles',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','','');
INSERT INTO Character VALUES(5,'Mohammed Mehmed Sigmalat (Meth Cigs)','pissé stockpiler, a firm believer in the curative powers of powdered urine always has a box on hand',0,1,4,0,6,0,0,0,0,'','','','','','',0,'','','','','','','','','');
INSERT INTO Character VALUES(6,'Lucretia Nihilo','Lucretia is an elegant woman, adorned with hundreds of wooden beads',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(7,'Bump Roberts','Long time lieutenant in the Amba Brotherhood',0,1,4,0,6,1,0,2,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(8,'Lichen Loboski','Born into the last Mosswolf family, Lichen has strived to reach capitalist success in Zephyr while maintaining the secret of his birth.',0,1,12,0,8,4,2,1,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(9,'The Tarnished Nomad','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(10,'Skeev Hanson','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(11,'Captain Nix Olshe','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(12,'Actaeon Irving','',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(13,'Queen Harlouse','A master tactician and food enthusiast, after  defeating the Prince, she began looking for ways to expand her kingdom, she believes the Prince''s collection may hold some powerful tools.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(14,'The Twisted Prince','A powerful lich who collected objects both magical and mundane for centuries prior to trying to conquer the kingdom. Though defeated at the battle of ''corpses in a coffin'', his phylactery remains somewhere within his Stronghold.  Originally a grave robber who gathered trophies from his exploits, he happened upon the grave of an ancient lich and found texts detailing death magics. Practicing these while maintaining his old hobby, the Prince managed to accumulate a great mass of intriguing artifacts.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(15,'The Builder','Hired by a merchant to build a tavern and mercantile. Eager to talk',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(16,'Aimane Sonet','A Grizzled Warrior. After being injured early on in the Queen’s campaign against The Prince, this warrior is nevertheless a veteran and wants to prove himself by clearing the Prince’s Stronghold.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(17,'Kapitan','Captain in army, furious after losing men to anomaly. Eager to send in prisoners instead and will not hesitate to shoot deserters or escaping prisoners.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(18,'President Traitorous','Dictator of Megbellistan, survived through tactical backstabbing until overthrown by an alliance of his past enemies. Secretly captured by the CIA to be used in future government overthrow, but use has passed',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(19,'Valeriya Usmedivich','War Journalist, was documenting the war in Megbellistan when she was caught by soldiers testing biological weapons on civilians.',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(20,'Martin (Marty) Christ','Con man and alleged direct descendant of Jesus. Considered too dangerous to be in the world at large, has started several cults',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(21,'Robert Jr','Bad omen for ending',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
INSERT INTO Character VALUES(22,'Hank Schrader','American Spy, found documents proving Putin’s sexually charged relationship with Lukashenko, very patriotic',0,1,4,0,6,0,0,0,0,'','','','','','',1,'','','','','','','','','');
CREATE TABLE IF NOT EXISTS "Relationship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);
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
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
COMMIT;
