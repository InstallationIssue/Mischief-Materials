/*
  Warnings:

  - You are about to drop the column `foundationId` on the `Scenario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Scenario" ("description", "id", "name") SELECT "description", "id", "name" FROM "Scenario";
DROP TABLE "Scenario";
ALTER TABLE "new_Scenario" RENAME TO "Scenario";
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
