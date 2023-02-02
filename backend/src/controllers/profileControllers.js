const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        id: 1,
      },
    });
    if (profile) {
      res.json(profile);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const updateProfile = async (req, res) => {
  const { description, imageUrl, githubLink, linkedinLink } = req.body;

  const newData = {};

  if (description) {
    newData.description = description;
  }

  if (imageUrl) {
    newData.image_url = imageUrl;
  }

  if (githubLink) {
    newData.github_link = githubLink;
  }

  if (linkedinLink) {
    newData.linkedin_link = linkedinLink;
  }

  try {
    const profile = await prisma.profile.update({
      where: {
        id: 1,
      },
      data: newData,
    });
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
