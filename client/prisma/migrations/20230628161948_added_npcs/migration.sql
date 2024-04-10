-- CreateTable
CREATE TABLE "Npc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "asset" TEXT NOT NULL,
    "liability" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "misfortune" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "characterId" INTEGER NOT NULL,
    CONSTRAINT "Npc_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Npc_characterId_key" ON "Npc"("characterId");
