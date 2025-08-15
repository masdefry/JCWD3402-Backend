import prisma from '../config/prisma.client';
import { Employee } from '../generated/prisma';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/create.token';
const saltRounds = 10;

export const registerService = async ({
  fullName,
  phoneNumber,
  email,
  password,
  employmentStatus,
  departmentId,
  positionId,
  workShiftId,
}: Omit<
  Employee,
  'uid' | 'createdAt' | 'deletedAt' | 'updatedAt' | 'totalLeaveBalance'
>) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return await prisma.employee.create({
    data: {
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      employmentStatus,
      departmentId,
      positionId,
      workShiftId,
    },
  });
};

export const loginService = async ({
  email,
  password,
}: Pick<Employee, 'email' | 'password'>) => {
  const findEmployeeByEmail = await prisma.employee.findFirst({
    where: {
      email,
    },
    include: {
      departments: {
        select: {
          division: true,
        },
      },
      positons: {
        select: {
          role: true,
        },
      },
    },
  });

  if (!findEmployeeByEmail) throw new Error('Invalid email or password');

  const isComparePassword = await bcrypt.compare(
    password,
    findEmployeeByEmail?.password
  );

  if (!isComparePassword) throw new Error('Invalid email or password');

  const token = createToken(
    {
      uid: findEmployeeByEmail?.uid,
      departments: findEmployeeByEmail?.departments?.division,
      positions: findEmployeeByEmail?.positons?.role,
    },
    process.env.JWT_SECRET_KEY_AUTHENTICATION!,
    {
      expiresIn: '1h',
    }
  );

  return token;
};
