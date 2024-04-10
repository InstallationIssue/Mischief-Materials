/*
  Warnings:

  - You are about to drop the column `name` on the `EncounterInstance` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Encounter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Encounter" ("id") SELECT "id" FROM "Encounter";
DROP TABLE "Encounter";
ALTER TABLE "new_Encounter" RENAME TO "Encounter";
CREATE UNIQUE INDEX "Encounter_name_key" ON "Encounter"("name");
CREATE TABLE "new_EncounterInstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "monsterId" INTEGER NOT NULL,
    "encounterId" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "EncounterInstance_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES "Monster" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EncounterInstance_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_EncounterInstance" ("encounterId", "health_lost", "id", "monsterId") SELECT "encounterId", "health_lost", "id", "monsterId" FROM "EncounterInstance";
DROP TABLE "EncounterInstance";
ALTER TABLE "new_EncounterInstance" RENAME TO "EncounterInstance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
