const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const browse = async (req, res) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (post) {
      res.json(post);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const newData = {};

  if (req.body.title) {
    newData.title = req.body.title;
  }

  if (req.body.content) {
    newData.content = req.body.content;
  }

  if (req.body.image_url) {
    newData.image_url = req.body.image_url;
  }

  try {
    const post = await prisma.post.create({
      data: newData,
    });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const { id } = req.params;
  const newData = {};

  if (req.body.title) {
    newData.title = req.body.title;
  }

  if (req.body.content) {
    newData.content = req.body.content;
  }

  if (req.body.image_url) {
    newData.image_url = req.body.image_url;
  }

  try {
    const post = await prisma.post.update({
      where: {
        id: parseInt(id, 10),
      },
      data: newData,
    });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.delete({
      where: {
        id: parseInt(id, 10),
      },
    });
    res.json(post);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
