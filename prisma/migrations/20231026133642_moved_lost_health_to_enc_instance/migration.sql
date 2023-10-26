/*
  Warnings:

  - You are about to drop the column `health_lost` on the `Monster` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_EncounterInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "monsterId" INTEGER NOT NULL,
    "encounterId" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "EncounterInstance_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "Monster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EncounterInstance_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EncounterInstance" ("encounterId", "id", "monsterId", "name") SELECT "encounterId", "id", "monsterId", "name" FROM "EncounterInstance";
DROP TABLE "EncounterInstance";
ALTER TABLE "new_EncounterInstance" RENAME TO "EncounterInstance";
CREATE UNIQUE INDEX "EncounterInstance_name_key" ON "EncounterInstance"("name");
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
    "encounterId" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Monster" ("armor", "attack", "background", "dex", "encounterId", "health_max", "id", "name", "size", "str", "wil") SELECT "armor", "attack", "background", "dex", "encounterId", "health_max", "id", "name", "size", "str", "wil" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
