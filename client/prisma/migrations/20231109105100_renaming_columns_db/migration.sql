/*
  Warnings:

  - You are about to drop the column `magicId` on the `Spell` table. All the data in the column will be lost.
  - You are about to drop the column `encounterId` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `relationships` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the column `encounterId` on the `EncounterInstance` table. All the data in the column will be lost.
  - You are about to drop the column `monsterId` on the `EncounterInstance` table. All the data in the column will be lost.
  - Added the required column `character_id` to the `Relationship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `magic_id` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encounter_id` to the `EncounterInstance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monster_id` to the `EncounterInstance` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Relationship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "character_id" INTEGER NOT NULL,
    CONSTRAINT "Relationship_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Relationship" ("description", "id", "name") SELECT "description", "id", "name" FROM "Relationship";
DROP TABLE "Relationship";
ALTER TABLE "new_Relationship" RENAME TO "Relationship";
CREATE TABLE "new_Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "magic_id" INTEGER NOT NULL,
    CONSTRAINT "Spell_magic_id_fkey" FOREIGN KEY ("magic_id") REFERENCES "Magic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Spell" ("description", "id", "name") SELECT "description", "id", "name" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");
CREATE TABLE "new_Monster" (
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
INSERT INTO "new_Monster" ("armor", "attack", "background", "dex", "health_max", "id", "name", "personality", "size", "str", "tactics", "weakness", "wil") SELECT "armor", "attack", "background", "dex", "health_max", "id", "name", "personality", "size", "str", "tactics", "weakness", "wil" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
CREATE TABLE "new_Character" (
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
INSERT INTO "new_Character" ("appearance", "armor", "assets", "att", "background", "clothing", "dex", "goals", "health_lost", "health_max", "hobbies", "id", "level", "liabilities", "mannerism", "misfortunes", "missions", "name", "npc", "personality", "physical_detail", "profession", "reputations", "secrets", "str", "wil", "xp") SELECT "appearance", "armor", "assets", "att", "background", "clothing", "dex", "goals", "health_lost", "health_max", "hobbies", "id", "level", "liabilities", "mannerism", "misfortunes", "missions", "name", "npc", "personality", "physical_detail", "profession", "reputations", "secrets", "str", "wil", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
CREATE TABLE "new_EncounterInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monster_id" INTEGER NOT NULL,
    "encounter_id" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "EncounterInstance_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "Monster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EncounterInstance_encounter_id_fkey" FOREIGN KEY ("encounter_id") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EncounterInstance" ("health_lost", "id") SELECT "health_lost", "id" FROM "EncounterInstance";
DROP TABLE "EncounterInstance";
ALTER TABLE "new_EncounterInstance" RENAME TO "EncounterInstance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
