-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scenario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT 'Default'
);
INSERT INTO "new_Scenario" ("description", "id", "image", "name") SELECT "description", "id", "image", "name" FROM "Scenario";
DROP TABLE "Scenario";
ALTER TABLE "new_Scenario" RENAME TO "Scenario";
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
