/*
  Warnings:

  - You are about to drop the column `spell_formula` on the `Spell` table. All the data in the column will be lost.
  - Added the required column `creatureId` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spellFormula` to the `Spell` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatureId` to the `Monster` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spellFormula" TEXT NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Spell_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Spell" ("description", "id", "name") SELECT "description", "id", "name" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE UNIQUE INDEX "Spell_creatureId_key" ON "Spell"("creatureId");
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "power" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Monster_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Monster" ("attack", "id", "power", "size") SELECT "attack", "id", "power", "size" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_creatureId_key" ON "Monster"("creatureId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
