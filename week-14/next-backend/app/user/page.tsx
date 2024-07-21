import { PrismaClient } from "@prisma/client";

import client from "@/db";
async function fetchData() {
  const user = await client.user.findFirst();
  return {
    email: user?.email,
    name: "akshay",
  };
}

export default async function User() {
  const data = await fetchData();

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
