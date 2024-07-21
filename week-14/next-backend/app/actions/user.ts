"use server";
import client from "@/db";

export async function signup(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        email,
        password,
      },
    });
    console.log("running on server?");

    return true;
  } catch (e) {
    return false;
  }
}
