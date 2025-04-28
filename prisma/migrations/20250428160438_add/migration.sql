-- AlterTable
ALTER TABLE "Launguages" ALTER COLUMN "proficiency" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "student" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Publication" ALTER COLUMN "publisher" DROP NOT NULL,
ALTER COLUMN "url" DROP NOT NULL;
