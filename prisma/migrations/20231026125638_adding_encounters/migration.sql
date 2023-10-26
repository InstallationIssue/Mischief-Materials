-- CreateTable
CREATE TABLE "Encounter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "physical_features" TEXT NOT NULL DEFAULT '',
    "npc" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Character" ("armor", "background", "dex", "health_lost", "health_max", "id", "level", "name", "npc", "physical_features", "str", "wil", "xp") SELECT "armor", "background", "dex", "health_lost", "health_max", "id", "level", "name", "npc", "physical_features", "str", "wil", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
CREATE TABLE "new_Magic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "medium" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Magic" ("description", "id", "name") SELECT "description", "id", "name" FROM "Magic";
DROP TABLE "Magic";
ALTER TABLE "new_Magic" RENAME TO "Magic";
CREATE UNIQUE INDEX "Magic_name_key" ON "Magic"("name");
CREATE TABLE "new_Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "magicId" INTEGER NOT NULL,
    CONSTRAINT "Spell_magicId_fkey" FOREIGN KEY ("magicId") REFERENCES "Magic" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Spell" ("description", "id", "magicId", "name") SELECT "description", "id", "magicId", "name" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "value" INTEGER NOT NULL DEFAULT 100
);
INSERT INTO "new_Item" ("description", "id", "name", "value") SELECT "description", "id", "name", "value" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL DEFAULT '',
    "health_max" INTEGER NOT NULL DEFAULT 4,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    "armor" INTEGER NOT NULL DEFAULT 6,
    "str" INTEGER NOT NULL DEFAULT 0,
    "dex" INTEGER NOT NULL DEFAULT 0,
    "wil" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Typical',
    "attack" INTEGER NOT NULL DEFAULT 0,
    "encounterId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Monster_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Monster" ("armor", "attack", "background", "dex", "health_lost", "health_max", "id", "name", "size", "str", "wil") SELECT "armor", "attack", "background", "dex", "health_lost", "health_max", "id", "name", "size", "str", "wil" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
CREATE TABLE "new_Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Scenario" ("description", "id", "name") SELECT "description", "id", "name" FROM "Scenario";
DROP TABLE "Scenario";
ALTER TABLE "new_Scenario" RENAME TO "Scenario";
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");
CREATE TABLE "new_Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#D9D9D9',
    "icon" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Location" ("color", "description", "id", "name") SELECT "color", "description", "id", "name" FROM "Location";
DROP TABLE "Location";
ALTER TABLE "new_Location" RENAME TO "Location";
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");
CREATE TABLE "new_Foundation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "setting" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Foundation" ("id", "name", "setting") SELECT "id", "name", "setting" FROM "Foundation";
DROP TABLE "Foundation";
ALTER TABLE "new_Foundation" RENAME TO "Foundation";
CREATE UNIQUE INDEX "Foundation_name_key" ON "Foundation"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
