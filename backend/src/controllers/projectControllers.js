const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const browse = async (req, res) => {
  try {
    const items = await prisma.item.findMany({
      include: {
        tags: true,
      },
    });
    res.json(items);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
};
