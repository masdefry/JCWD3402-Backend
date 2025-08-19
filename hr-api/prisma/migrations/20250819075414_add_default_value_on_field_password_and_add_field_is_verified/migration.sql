-- AlterTable
ALTER TABLE "public"."employees" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "password" SET DEFAULT 'purwadhika@2025';
