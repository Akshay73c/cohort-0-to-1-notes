import { PrismaClient } from "@prisma/client";

console.log("in db file");
const prismaClientSingleton = () => {
  console.log("prisma client instantiated");
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
//globalThis is something that does not change anytime you hot reload.
