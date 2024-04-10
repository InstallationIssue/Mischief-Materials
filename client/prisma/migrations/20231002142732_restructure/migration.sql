/*
  Warnings:

  - You are about to drop the `Campaign` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Character` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Creature` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spell` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `characterId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `creatureId` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Scenario` table. All the data in the column will be lost.
  - You are about to drop the column `asset` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `characterId` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `goal` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `liability` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `method` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `misfortune` on the `Npc` table. All the data in the column will be lost.
  - You are about to drop the column `mission` on the `Npc` table. All the data in the column will be lost.
  - Added the required column `armor` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dex` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health_lost` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health_max` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `str` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wil` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foundationId` to the `Scenario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `appearance` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `armor` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `background` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clothing` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dex` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health_lost` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `health_max` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mannerism` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personality` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `physical_detail` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `str` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wil` to the `Npc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `xp` to the `Npc` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Campaign_name_key";

-- DropIndex
DROP INDEX "Character_campaignId_key";

-- DropIndex
DROP INDEX "Character_creatureId_key";

-- DropIndex
DROP INDEX "Creature_name_key";

-- DropIndex
DROP INDEX "Spell_creatureId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Campaign";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Character";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Creature";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Spell";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Location" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "health_max" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "wil" INTEGER NOT NULL,
    "background" TEXT NOT NULL,
    "appearance" TEXT NOT NULL,
    "physical_detail" TEXT NOT NULL,
    "clothing" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "mannerism" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Magic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Item" ("description", "id", "name") SELECT "description", "id", "name" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "health_max" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "wil" INTEGER NOT NULL,
    "power" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "attack" INTEGER NOT NULL
);
INSERT INTO "new_Monster" ("attack", "id", "power", "size") SELECT "attack", "id", "power", "size" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE TABLE "new_Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "foundationId" INTEGER NOT NULL,
    CONSTRAINT "Scenario_foundationId_fkey" FOREIGN KEY ("foundationId") REFERENCES "Foundation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Scenario" ("description", "id", "name") SELECT "description", "id", "name" FROM "Scenario";
DROP TABLE "Scenario";
ALTER TABLE "new_Scenario" RENAME TO "Scenario";
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");
CREATE UNIQUE INDEX "Scenario_foundationId_key" ON "Scenario"("foundationId");
CREATE TABLE "new_Npc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "xp" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "health_max" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL,
    "armor" INTEGER NOT NULL,
    "str" INTEGER NOT NULL,
    "dex" INTEGER NOT NULL,
    "wil" INTEGER NOT NULL,
    "background" TEXT NOT NULL,
    "appearance" TEXT NOT NULL,
    "physical_detail" TEXT NOT NULL,
    "clothing" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "mannerism" TEXT NOT NULL
);
INSERT INTO "new_Npc" ("id") SELECT "id" FROM "Npc";
DROP TABLE "Npc";
ALTER TABLE "new_Npc" RENAME TO "Npc";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Magic_name_key" ON "Magic"("name");
