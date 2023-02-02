const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const browse = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    // Format the data
    const newProjects = projects.map((project) => {
      const newProject = {
        ...project,
        tags: project.tags.map((tag) => tag.tag.name),
      };
      return newProject;
    });

    res.json(newProjects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(id, 10),
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    if (project) {
      const newProject = {
        ...project,
        tags: project.tags.map((tag) => tag.tag.name),
      };
      res.json(newProject);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const dataToAdd = await prisma.project.create({
    data: {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      tags: {
        create: req.body.tags.map((tag) => ({
          tag_id: tag.tag_id,
        })),
      },
    },
  });

  res.json(dataToAdd);
};

const edit = async (req, res) => {
  const { id } = req.params;

  const dataToUpdate = await prisma.project.update({
    where: {
      id: parseInt(id, 10),
    },
    data: {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      tags: {
        deleteMany: {},
        create: req.body.tags.map((tag) => ({
          tag_id: tag.tag_id,
        })),
      },
    },
  });

  res.json(dataToUpdate);
};

const destroy = async (req, res) => {
  const { id } = req.params;

  const dataToDelete = await prisma.project.delete({
    where: {
      id: parseInt(id, 10),
    },
  });

  res.json(dataToDelete);
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
