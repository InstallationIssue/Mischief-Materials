/*
  Warnings:

  - Added the required column `campaignId` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `campaignId` to the `Npc` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Campaign" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "map" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Foundation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "setting" TEXT NOT NULL,
    "map" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "Scenario_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,
    CONSTRAINT "Item_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "power" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "attack" INTEGER NOT NULL,
    "creatureId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "Monster_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Monster_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Monster" ("attack", "creatureId", "id", "power", "size") SELECT "attack", "creatureId", "id", "power", "size" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_creatureId_key" ON "Monster"("creatureId");
CREATE UNIQUE INDEX "Monster_campaignId_key" ON "Monster"("campaignId");
CREATE TABLE "new_Npc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "asset" TEXT NOT NULL,
    "liability" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "misfortune" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,
    "campaignId" INTEGER NOT NULL,
    CONSTRAINT "Npc_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Npc_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Npc" ("asset", "characterId", "goal", "id", "liability", "method", "misfortune", "mission") SELECT "asset", "characterId", "goal", "id", "liability", "method", "misfortune", "mission" FROM "Npc";
DROP TABLE "Npc";
ALTER TABLE "new_Npc" RENAME TO "Npc";
CREATE UNIQUE INDEX "Npc_characterId_key" ON "Npc"("characterId");
CREATE UNIQUE INDEX "Npc_campaignId_key" ON "Npc"("campaignId");
CREATE TABLE "new_Character" (
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
    "campaignId" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Character_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Character_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Character" ("appearance", "background", "clothing", "creatureId", "id", "level", "mannerism", "personality", "physical_detail", "xp") SELECT "appearance", "background", "clothing", "creatureId", "id", "level", "mannerism", "personality", "physical_detail", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_creatureId_key" ON "Character"("creatureId");
CREATE UNIQUE INDEX "Character_campaignId_key" ON "Character"("campaignId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_name_key" ON "Campaign"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Foundation_name_key" ON "Foundation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Scenario_campaignId_key" ON "Scenario"("campaignId");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_characterId_key" ON "Item"("characterId");
