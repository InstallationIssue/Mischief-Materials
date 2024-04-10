-- CreateTable
CREATE TABLE "Creature" (
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

-- CreateTable
CREATE TABLE "Character" (
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

-- CreateTable
CREATE TABLE "Spell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spell_formula" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "power" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "attack" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Creature_name_key" ON "Creature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_creatureId_key" ON "Character"("creatureId");
