const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const browse = async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  try {
    const item = await prisma.item.findUnique({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    if (item) {
      res.json(item);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  try {
    const result = await prisma.item.update({
      where: {
        id: parseInt(req.params.id, 10),
      },
      data: item,
    });
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const item = req.body;

  // TODO validations (length, format...)

  try {
    const result = await prisma.item.create({
      data: item,
    });
    if (result) {
      res.sendStatus(201);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  try {
    const result = await prisma.item.delete({
      where: {
        id: parseInt(req.params.id, 10),
      },
    });
    if (result) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
