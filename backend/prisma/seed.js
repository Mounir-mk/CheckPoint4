const { PrismaClient } = require("@prisma/client");

const { items } = require("./data");

const prisma = new PrismaClient();

async function main() {
  // Create items
  await prisma.item.createMany({
    data: items,
  });

  console.warn("Seeding complete!");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
