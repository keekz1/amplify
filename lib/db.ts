import { PrismaClient } from '@prisma/client';

// Declare the global variable for Prisma Client
declare global {
  var prisma: PrismaClient | undefined;
}

// Initialize the Prisma Client
export const db = globalThis.prisma || new PrismaClient();

// Store Prisma Client in the global object during development
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
