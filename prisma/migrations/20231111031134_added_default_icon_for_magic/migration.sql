-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Magic" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "medium" TEXT NOT NULL DEFAULT 'magic'
);
INSERT INTO "new_Magic" ("description", "id", "medium", "name") SELECT "description", "id", "medium", "name" FROM "Magic";
DROP TABLE "Magic";
ALTER TABLE "new_Magic" RENAME TO "Magic";
CREATE UNIQUE INDEX "Magic_name_key" ON "Magic"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
