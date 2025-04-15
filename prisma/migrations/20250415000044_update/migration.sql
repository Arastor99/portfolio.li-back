/*
  Warnings:

  - You are about to drop the column `urn` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `geoUrn` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `geoCountryUrn` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `industryUrn` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `memberUrn` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `profileUrn` on the `Profile` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_urn_key";

-- DropIndex
DROP INDEX "Profile_memberUrn_key";

-- DropIndex
DROP INDEX "Profile_profileUrn_key";

-- DropIndex
DROP INDEX "Profile_publicId_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "urn";

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "geoUrn";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "geoCountryUrn",
DROP COLUMN "industryUrn",
DROP COLUMN "memberUrn",
DROP COLUMN "profileUrn";

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "templateId" TEXT NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PortfolioTemplate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_publicId_key" ON "Portfolio"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_userId_key" ON "Portfolio"("userId");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "PortfolioTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
