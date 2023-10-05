/*
  Warnings:

  - You are about to drop the column `power` on the `Monster` table. All the data in the column will be lost.
  - Added the required column `background` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Monster` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL,
    "health_max" INTEGER NOT NULL DEFAULT 4,
    "health_lost" INTEGER NOT NULL DEFAULT 0,
    "armor" INTEGER NOT NULL DEFAULT 6,
    "str" INTEGER NOT NULL DEFAULT 0,
    "dex" INTEGER NOT NULL DEFAULT 0,
    "wil" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Typical',
    "attack" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Monster" ("armor", "attack", "dex", "health_lost", "health_max", "id", "size", "str", "wil") SELECT "armor", "attack", "dex", "health_lost", "health_max", "id", "size", "str", "wil" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
