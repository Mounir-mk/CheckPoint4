import PropTypes from "prop-types";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

function Hero({ profile }) {
  return (
    <section id="hero" className="flex justify-between">
      <article className="flex flex-col gap-6 justify-between py-4">
        <h1 className="text-3xl font-bold">Hello, I'm Mounir</h1>
        <p className="text-lg max-w-prose">{profile.description}</p>
        <div id="socials" className="flex gap-4">
          <a href={profile.github_link} target="_blank" rel="noreferrer">
            <img className="w-8 h-8" src={github} alt="github" />
          </a>
          <a href={profile.linkedin_link} target="_blank" rel="noreferrer">
            <img className="w-8 h-8" src={linkedin} alt="github" />
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
