-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Monster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "power" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "attack" INTEGER NOT NULL,
    "creatureId" INTEGER NOT NULL,
    CONSTRAINT "Monster_creatureId_fkey" FOREIGN KEY ("creatureId") REFERENCES "Creature" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Monster" ("attack", "creatureId", "id", "power", "size") SELECT "attack", "creatureId", "id", "power", "size" FROM "Monster";
DROP TABLE "Monster";
ALTER TABLE "new_Monster" RENAME TO "Monster";
CREATE UNIQUE INDEX "Monster_creatureId_key" ON "Monster"("creatureId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
