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
CREATE TABLE IF NOT EXISTS "Creature" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "health_max" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "wil" INTEGER NOT NULL
);
INSERT INTO Creature VALUES(1,'Locomotive Maw','A Train Man',4,0,6,2,0,1);
CREATE TABLE IF NOT EXISTS "Character" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "background" TEXT NOT NULL,
    "appearance" TEXT NOT NULL,
    "physical_detail" TEXT NOT NULL,
    "clothing" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "mannerism" TEXT NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Character_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO Character VALUES(1,0,1,'Locomotive Maw was merged with a TRAAIN!! He uses his fists to punch foes with the power of a full-bore locomotive','','','','personality','',1);
CREATE TABLE IF NOT EXISTS "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spellFormula" TEXT NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Spell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "power" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "attack" INTEGER NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Monster_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS "Npc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "asset" TEXT NOT NULL,
    "liability" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "misfortune" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,
    CONSTRAINT "Npc_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('Spell',0);
INSERT INTO sqlite_sequence VALUES('Monster',0);
INSERT INTO sqlite_sequence VALUES('Creature',1);
INSERT INTO sqlite_sequence VALUES('Character',1);
CREATE UNIQUE INDEX "Creature_name_key" ON "Creature"("name");
CREATE UNIQUE INDEX "Character_creatureId_key" ON "Character"("creatureId");
CREATE UNIQUE INDEX "Spell_creatureId_key" ON "Spell"("creatureId");
CREATE UNIQUE INDEX "Monster_creatureId_key" ON "Monster"("creatureId");
CREATE UNIQUE INDEX "Npc_characterId_key" ON "Npc"("characterId");
COMMIT;
