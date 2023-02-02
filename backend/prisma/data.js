const { faker } = require("@faker-js/faker");

const profile = {
  description: `Hi my name is Mounir, I'm currently 24, learning web development @WildCodeSchool and wish to work as a full stack developper.`,
  image_url: "profilepic.png",
  github_link: "https://github.com/mounir-mk",
  linkedin_link: "https://www.linkedin.com/in/mounir-mekoui/",
};

const array = new Array(50).fill(1);
const todayTimestamp = new Date().getTime();
const fourMonthsAgoTimestamp = todayTimestamp - 1000 * 60 * 60 * 24 * 30 * 4;

const projects = array.map(() => {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraphs(1),
    created_at: faker.date.between(fourMonthsAgoTimestamp, todayTimestamp),
    image_url: faker.image.imageUrl(400, 400, true),
  };
});

const projectTags = array.map(() => {
  return {
    project_id: faker.datatype.number({ min: 1, max: 50 }),
    tag_id: faker.datatype.number({ min: 1, max: 11 }),
  };
});

const posts = array.map(() => {
  return {
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    created_at: faker.date.between(fourMonthsAgoTimestamp, todayTimestamp),
    image_url: faker.image.imageUrl(640, 480, true),
  };
});

const tags = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
  { name: "NodeJS" },
  { name: "Express" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "Prisma" },
  { name: "Vite" },
  { name: "Tailwind" },
];

module.exports = {
  profile,
  projects,
  projectTags,
  posts,
  tags,
};
