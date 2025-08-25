import prisma from '../config/prisma.client';
import { Employee } from '../generated/prisma';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/create.token';
import transporter from '../config/nodemailer.transporter';
const saltRounds = 10;
import fs from 'fs';
import Handlebars from 'handlebars';
import path from 'path';

export const registerService = async ({
  fullName,
  phoneNumber,
  email,
  employmentStatus,
  departmentId,
  positionId,
  workShiftId,
}: Omit<
  Employee,
  | 'uid'
  | 'createdAt'
  | 'deletedAt'
  | 'updatedAt'
  | 'totalLeaveBalance'
  | 'isVerified'
  | 'password'
>) => {
  const hashedPassword = await bcrypt.hash(
    process.env.DEFAULT_EMPLOYEE_PASSWORD!,
    saltRounds
  );

  const createdEmployee = await prisma.employee.create({
    data: {
      fullName,
      phoneNumber,
      email,
      password: hashedPassword,
      employmentStatus,
      departmentId: Number(departmentId),
      positionId: Number(positionId),
      workShiftId: Number(workShiftId),
    },
  });

  const templateHtmlDir = path.resolve(__dirname, '../templates');
  const templateHtmlFile = 'account-activation.html';
  const templateHtmlPath = path.join(templateHtmlDir, templateHtmlFile);

  const templateHtml = fs.readFileSync(templateHtmlPath, 'utf-8');

  const compiledTemplateHtml = Handlebars.compile(templateHtml);

  const html = compiledTemplateHtml({
    employeeName: fullName,
    resetLink: process.env.RESET_LINK_URL,
  });

  await transporter.sendMail({
    to: email,
    subject: 'New Employee Account Activation & Reset Password',
    html: html,
  });

  return createdEmployee;
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

  return {
    token, 
    fullName: findEmployeeByEmail?.fullName, 
    department: findEmployeeByEmail?.departments?.division,
    position: findEmployeeByEmail?.positons?.role
  };
};
