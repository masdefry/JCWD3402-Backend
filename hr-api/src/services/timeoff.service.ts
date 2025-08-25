import prisma from '../config/prisma.client';
import { LeaveRequest } from '../generated/prisma';

interface CreateTimeOffServiceProps
  extends Pick<LeaveRequest, 'startDate' | 'endDate' | 'reason'> {
  files: Express.Multer.File[];
  uid: string;
}

export const createTimeOffService = async ({
  files,
  startDate,
  endDate,
  reason,
  uid,
}: CreateTimeOffServiceProps) => {
  await prisma.$transaction(async (tx) => {
    const createdLeaveRequest = await tx.leaveRequest.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason,
        requestEmployeeId: uid,
        totalDays: 0,
        status: 'WAITING_FOR_APPROVAL',
      },
    });

    const leaveRequestEvidenceToCreate = files?.map(
      (file: Express.Multer.File) => {
        return {
          image: file?.filename,
          leaveRequestId: createdLeaveRequest?.id,
        };
      }
    ); // [{image: xxx, leaveRequestId: xxx}]

    await tx.leaveRequestEvidence.createMany({
      data: leaveRequestEvidenceToCreate,
    });
  });
};

// User A tf User B
// 1. Cek saldo User A
// 2. Cukup, Tf ke User B
// 3. Tf  Berhasil, Saldo User A Berkurang & User B Bertambah
