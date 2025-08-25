-- CreateTable
CREATE TABLE "public"."leaver_request_evidences" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "leaveRequestId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "leaver_request_evidences_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."leaver_request_evidences" ADD CONSTRAINT "leaver_request_evidences_leaveRequestId_fkey" FOREIGN KEY ("leaveRequestId") REFERENCES "public"."leave_requests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
