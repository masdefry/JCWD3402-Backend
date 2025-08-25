-- DropForeignKey
ALTER TABLE "public"."leave_requests" DROP CONSTRAINT "leave_requests_approvedHRId_fkey";

-- DropForeignKey
ALTER TABLE "public"."leave_requests" DROP CONSTRAINT "leave_requests_approvedManagerId_fkey";

-- AlterTable
ALTER TABLE "public"."leave_requests" ALTER COLUMN "approvedManagerId" DROP NOT NULL,
ALTER COLUMN "approvedHRId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."leave_requests" ADD CONSTRAINT "leave_requests_approvedManagerId_fkey" FOREIGN KEY ("approvedManagerId") REFERENCES "public"."employees"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leave_requests" ADD CONSTRAINT "leave_requests_approvedHRId_fkey" FOREIGN KEY ("approvedHRId") REFERENCES "public"."employees"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
