-- CreateTable
CREATE TABLE "_CharacterToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CharacterToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Character" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CharacterToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToItem_AB_unique" ON "_CharacterToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToItem_B_index" ON "_CharacterToItem"("B");
