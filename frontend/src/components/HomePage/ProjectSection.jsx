import PropTypes from "prop-types";
import Project from "./Project";

function ProjectSection({ projects }) {
  return (
    <section id="projects" className="my-6">
      <h2 className="text-2xl font-semibold">Projets Récents</h2>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </section>
  );
}

ProjectSection.propTypes = {
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
};

export default ProjectSection;
