import PropTypes from "prop-types";
import Hero from "../components/HomePage/Hero";
import ProjectSection from "../components/HomePage/ProjectSection";
import PostSection from "../components/HomePage/PostSection";

function HomePage({ profile, projects, posts }) {
  return (
    <>
      <Hero profile={profile} />
      <ProjectSection projects={projects} />
      <PostSection posts={posts} />
    </>
  );
}

HomePage.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    image_url: PropTypes.string,
    github_link: PropTypes.string,
    linkedin_link: PropTypes.string,
  }).isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      created_at: PropTypes.string,
      description: PropTypes.string,
      image_url: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      created_at: PropTypes.string,
      content: PropTypes.string,
      image_url: PropTypes.string,
    })
  ).isRequired,
};

export default HomePage;
