-- CreateTable
CREATE TABLE "Scenario" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "setting" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT 'Default',

    CONSTRAINT "Scenario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Thread" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scenario_id" INTEGER NOT NULL,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#D9D9D9',
    "icon" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "scenario_id" INTEGER NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
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

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relationship" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "character_id" INTEGER NOT NULL,

    CONSTRAINT "Relationship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Path" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Path_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PathInstance" (
    "id" SERIAL NOT NULL,
    "character_id" INTEGER NOT NULL,
    "path_id" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PathInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monster" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "background" TEXT NOT NULL DEFAULT '',
    "health_max" INTEGER NOT NULL DEFAULT 4,
    "armor" INTEGER NOT NULL DEFAULT 6,
    "str" INTEGER NOT NULL DEFAULT 0,
    "dex" INTEGER NOT NULL DEFAULT 0,
    "wil" INTEGER NOT NULL DEFAULT 0,
    "size" TEXT NOT NULL DEFAULT 'Typical',
    "attack" INTEGER NOT NULL DEFAULT 0,
    "tactics" TEXT NOT NULL DEFAULT '',
    "personality" TEXT NOT NULL DEFAULT '',
    "weakness" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Monster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EncounterInstance" (
    "id" SERIAL NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "encounter_id" INTEGER NOT NULL,
    "health_lost" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "EncounterInstance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Encounter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Encounter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "value" INTEGER NOT NULL DEFAULT 100,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "magic_id" INTEGER NOT NULL,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Magic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "medium" TEXT NOT NULL DEFAULT 'magic',
    "induction" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Magic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LocationToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CharacterToItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EncounterToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ItemToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_MagicToScenario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Scenario_name_key" ON "Scenario"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Thread_name_key" ON "Thread"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Character_name_key" ON "Character"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Encounter_name_key" ON "Encounter"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Item_name_key" ON "Item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Spell_name_key" ON "Spell"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Magic_name_key" ON "Magic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_LocationToScenario_AB_unique" ON "_LocationToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_LocationToScenario_B_index" ON "_LocationToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToScenario_AB_unique" ON "_CharacterToScenario"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToScenario_B_index" ON "_CharacterToScenario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToItem_AB_unique" ON "_CharacterToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToItem_B_index" ON "_CharacterToItem"("B");

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

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_scenario_id_fkey" FOREIGN KEY ("scenario_id") REFERENCES "Scenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_scenario_id_fkey" FOREIGN KEY ("scenario_id") REFERENCES "Scenario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relationship" ADD CONSTRAINT "Relationship_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PathInstance" ADD CONSTRAINT "PathInstance_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PathInstance" ADD CONSTRAINT "PathInstance_path_id_fkey" FOREIGN KEY ("path_id") REFERENCES "Path"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncounterInstance" ADD CONSTRAINT "EncounterInstance_monster_id_fkey" FOREIGN KEY ("monster_id") REFERENCES "Monster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EncounterInstance" ADD CONSTRAINT "EncounterInstance_encounter_id_fkey" FOREIGN KEY ("encounter_id") REFERENCES "Encounter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_magic_id_fkey" FOREIGN KEY ("magic_id") REFERENCES "Magic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToScenario" ADD CONSTRAINT "_LocationToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LocationToScenario" ADD CONSTRAINT "_LocationToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToScenario" ADD CONSTRAINT "_CharacterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToScenario" ADD CONSTRAINT "_CharacterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToItem" ADD CONSTRAINT "_CharacterToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToItem" ADD CONSTRAINT "_CharacterToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncounterToScenario" ADD CONSTRAINT "_EncounterToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Encounter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EncounterToScenario" ADD CONSTRAINT "_EncounterToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToScenario" ADD CONSTRAINT "_ItemToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToScenario" ADD CONSTRAINT "_ItemToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MagicToScenario" ADD CONSTRAINT "_MagicToScenario_A_fkey" FOREIGN KEY ("A") REFERENCES "Magic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MagicToScenario" ADD CONSTRAINT "_MagicToScenario_B_fkey" FOREIGN KEY ("B") REFERENCES "Scenario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
