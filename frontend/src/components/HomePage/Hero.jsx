import PropTypes from "prop-types";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Hero({ profile }) {
  return (
    <section
      id="hero"
      className="flex justify-between pb-8 border-b-2 border-slate-400"
    >
      <article className="flex flex-col gap-6 justify-between py-4">
        <h1 className="text-3xl font-semibold font-sans text-slate-200">
          Salut à tous, moi c'est Mounir
        </h1>
        <p className="text-lg max-w-prose hover:text-blue-200 cursor-context-menu transition duration-300 ease-in-out">
          {profile.description}
        </p>
        <div id="socials" className="flex gap-4">
          <a href={profile.github_link} target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 hover:animate-pulse transition duration-300 ease-in-out"
              src={github}
              alt="github"
            />
          </a>
          <a href={profile.linkedin_link} target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 hover:animate-pulse transition duration-300 ease-in-out"
              src={linkedin}
              alt="github"
            />
          </a>
        </div>
      </article>
      <img
        className="h-80 rounded-full"
        src={`${import.meta.env.VITE_BACKEND_ASSETS}/${profile.image_url}`}
        alt="avatar"
      />
    </section>
  );
}

Hero.propTypes = {
  profile: PropTypes.shape({
    description: PropTypes.string,
    image_url: PropTypes.string,
    github_link: PropTypes.string,
    linkedin_link: PropTypes.string,
  }).isRequired,
};

export default Hero;
