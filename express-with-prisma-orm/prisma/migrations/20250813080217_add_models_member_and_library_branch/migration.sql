-- CreateTable
CREATE TABLE "public"."members" (
    "mid" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "idCardNumber" VARCHAR(25) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "members_pkey" PRIMARY KEY ("mid")
);

-- CreateTable
CREATE TABLE "public"."library_branches" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "address" TEXT NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "mid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "library_branches_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."library_branches" ADD CONSTRAINT "library_branches_mid_fkey" FOREIGN KEY ("mid") REFERENCES "public"."members"("mid") ON DELETE RESTRICT ON UPDATE CASCADE;
