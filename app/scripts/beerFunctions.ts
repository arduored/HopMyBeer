import prismaClient from "prisma/prismaClient";

export async function getLastXBeers(take: number) {
  return prismaClient.beer.findMany({
    orderBy: { createdAt: "desc" },
    take,
  });
}

export async function addBeer() {}
