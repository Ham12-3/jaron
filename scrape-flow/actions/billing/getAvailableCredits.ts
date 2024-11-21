"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetAvailableCredits() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("unauthenticated");
  }

  const balance = await prisma.userBalance.findUnique({
    where: { userId }, // Ensure `userId` is passed correctly
    select: { credits: true },
  });

  // If no balance is found, return -1
  if (!balance) {
    return -1;
  }

  // Return the user's credit balance
  return balance.credits;
}
