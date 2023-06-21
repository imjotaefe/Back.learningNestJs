-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employerCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "players_employerCode_key" ON "players"("employerCode");
