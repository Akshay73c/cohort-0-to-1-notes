import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function inserUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string,
  email: string
) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
      email,
    },
  });
  console.log(response);
}

inserUser("test2", "test2", "test2", "test2", "test2");
