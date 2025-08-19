const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

const departments = [
  {
    name: 'Academic Web Development',
    division: 'ACADEMIC',
  },
  {
    name: 'Employee Relation',
    division: 'HR',
  },
  {
    name: 'Human Capital',
    division: 'HR',
  },
];

const positions = [
  {
    name: 'Lecturer',
    role: 'STAFF',
  },
  {
    name: 'Academic',
    role: 'MANAGER',
  },
  {
    name: 'Senior HR',
    role: 'MANAGER',
  },
  {
    name: 'Junior HR',
    role: 'STAFF',
  },
];

const workShifts = [
  {
    code: 'SHFT-01',
    startTime: new Date('2025-01-01 09:00:00'),
    endTime: new Date('2025-01-01 18:00:00'),
  },
];

async function seed() {
  try {
    await prisma.department.createMany({
      data: departments,
    });

    await prisma.position.createMany({
      data: positions,
    });

    await prisma.workShift.createMany({
      data: workShifts,
    });
  } catch (error) {
    console.log(`[SEEDING] Error: ${error}`);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
