-- CreateTable
CREATE TABLE "_LocationToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LocationToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Location" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LocationToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CharacterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_EncounterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_EncounterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Encounter" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_EncounterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ItemToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ItemToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ItemToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_MagicToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MagicToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Magic" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MagicToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToScenario_AB_unique" ON "_LocationToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToScenario_B_index" ON "_LocationToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToScenario_AB_unique" ON "_CharacterToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToScenario_B_index" ON "_CharacterToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EncounterToScenario_AB_unique" ON "_EncounterToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_EncounterToScenario_B_index" ON "_EncounterToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToScenario_AB_unique" ON "_ItemToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToScenario_B_index" ON "_ItemToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MagicToScenario_AB_unique" ON "_MagicToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_MagicToScenario_B_index" ON "_MagicToScenario"("B");
