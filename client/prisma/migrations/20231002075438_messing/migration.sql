/*
  Warnings:

  - You are about to drop the column `map` on the `Foundation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Foundation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "setting" TEXT NOT NULL
);
INSERT INTO "new_Foundation" ("id", "name", "setting") SELECT "id", "name", "setting" FROM "Foundation";
DROP TABLE "Foundation";
ALTER TABLE "new_Foundation" RENAME TO "Foundation";
CREATE UNIQUE INDEX "Foundation_name_key" ON "Foundation"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
