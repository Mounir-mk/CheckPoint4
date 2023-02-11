import PropTypes from "prop-types";
import TagList from "./TagList";

function Project({ project }) {
  return (
    <a
      href={project.github_link}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-6 justify-between py-4 hover:animate-pulse hover:shadow-2xl transition duration-300 ease-in-out"
    >
      <div className="flex flex-col md:flex-row bg-slate-800 rounded-xl p-5 gap-8 items-center">
        <img
          className="h-36 w-36 rounded-3xl"
          src={`${import.meta.env.VITE_BACKEND_ASSETS}/${project.thumbnail}`}
          alt="avatar"
        />
        <div>
          <div
            id="project-name-tags"
            className="flex flex-col md:flex-row gap-6 items-center"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <TagList tags={project.tags} />
          </div>
          <p className="text-base max-w-prose mt-4">{project.description}</p>
        </div>
      </div>
    </a>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    github_link: PropTypes.string,
    title: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Project;
