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
INSERT INTO "new_Character" ("appearance", "armor", "assets", "background", "clothing", "dex", "goals", "health_lost", "health_max", "hobbies", "id", "level", "liabilities", "mannerism", "misfortunes", "missions", "name", "npc", "personality", "physical_detail", "profession", "relationships", "reputations", "secrets", "str", "wil", "xp") SELECT "appearance", "armor", "assets", "background", "clothing", "dex", "goals", "health_lost", "health_max", "hobbies", "id", "level", "liabilities", "mannerism", "misfortunes", "missions", "name", "npc", "personality", "physical_detail", "profession", "relationships", "reputations", "secrets", "str", "wil", "xp" FROM "Character";
DROP TABLE "Character";
ALTER TABLE "new_Character" RENAME TO "Character";
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
