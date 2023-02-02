const { PrismaClient } = require("@prisma/client");

const { profile, projectTags, projects, posts, tags } = require("./data");

const prisma = new PrismaClient();

async function main() {
  // Create items
  await prisma.profile.create({
    data: profile,
  });

  await prisma.project.createMany({
    data: projects,
  });

  await prisma.tag.createMany({
    data: tags,
  });

  await prisma.projectTag.createMany({
    data: projectTags,
  });

  await prisma.post.createMany({
    data: posts,
  });
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
