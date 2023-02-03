import PropTypes from "prop-types";
import TagList from "./TagList";

function Project({ project }) {
  return (
    <article className="flex flex-col gap-6 justify-between py-4">
      <div className="flex bg-slate-800 rounded-xl p-3 gap-8">
        <img
          className="h-36 rounded-3xl"
          src={project.image_url}
          alt="avatar"
        />
        <div>
          <div id="project-name-tags" className="flex gap-6 items-center">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <TagList tags={project.tags} />
          </div>
          <p className="text-base max-w-prose mt-4">{project.description}</p>
        </div>
      </div>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    created_at: PropTypes.string,
    description: PropTypes.string,
    image_url: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Project;
