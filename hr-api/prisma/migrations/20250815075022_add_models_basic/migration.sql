-- CreateEnum
CREATE TYPE "public"."EmploymentStatus" AS ENUM ('PERMANENT', 'CONTRACT', 'PART_TIME');

-- CreateEnum
CREATE TYPE "public"."Division" AS ENUM ('ACADEMIC', 'HR', 'OPERATIONAL', 'IT');

-- CreateEnum
CREATE TYPE "public"."RolePosition" AS ENUM ('MANAGER', 'STAFF');

-- CreateEnum
CREATE TYPE "public"."AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LEAVE', 'WFH');

-- CreateEnum
CREATE TYPE "public"."LeaveStatus" AS ENUM ('WAITING_FOR_APPROVAL', 'APPROVED', 'REJECTED', 'CANCELLED');

-- CreateTable
CREATE TABLE "public"."employees" (
    "uid" TEXT NOT NULL,
    "fullName" VARCHAR(50) NOT NULL,
    "phoneNumber" VARCHAR(15) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,
    "totalLeaveBalance" INTEGER NOT NULL DEFAULT 12,
    "employmentStatus" "public"."EmploymentStatus" NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "positionId" INTEGER NOT NULL,
    "workShiftId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "employees_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "public"."departments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "division" "public"."Division" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."positions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "public"."RolePosition" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."work_shifts" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "work_shifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attendances" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "clockIn" TIME NOT NULL,
    "clockOut" TIME NOT NULL,
    "deduction" INTEGER NOT NULL DEFAULT 0,
    "workShiftId" INTEGER NOT NULL,
    "uid" TEXT NOT NULL,
    "status" "public"."AttendanceStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."leave_requests" (
    "id" SERIAL NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "totalDays" INTEGER NOT NULL,
    "reason" TEXT,
    "status" "public"."LeaveStatus" NOT NULL,
    "requestEmployeeId" TEXT NOT NULL,
    "approvedManagerId" TEXT NOT NULL,
    "approvedHRId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "leave_requests_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."employees" ADD CONSTRAINT "employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "public"."departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."employees" ADD CONSTRAINT "employees_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "public"."positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."employees" ADD CONSTRAINT "employees_workShiftId_fkey" FOREIGN KEY ("workShiftId") REFERENCES "public"."work_shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendances" ADD CONSTRAINT "attendances_workShiftId_fkey" FOREIGN KEY ("workShiftId") REFERENCES "public"."work_shifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attendances" ADD CONSTRAINT "attendances_uid_fkey" FOREIGN KEY ("uid") REFERENCES "public"."employees"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leave_requests" ADD CONSTRAINT "leave_requests_requestEmployeeId_fkey" FOREIGN KEY ("requestEmployeeId") REFERENCES "public"."employees"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leave_requests" ADD CONSTRAINT "leave_requests_approvedManagerId_fkey" FOREIGN KEY ("approvedManagerId") REFERENCES "public"."employees"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."leave_requests" ADD CONSTRAINT "leave_requests_approvedHRId_fkey" FOREIGN KEY ("approvedHRId") REFERENCES "public"."employees"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
