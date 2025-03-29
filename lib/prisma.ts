import { PrismaClient } from '@prisma/client';

// Add ESLint exception for global declaration
// eslint-disable-next-line no-var
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}