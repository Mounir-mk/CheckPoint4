import avatar from "../../assets/avatar.png";
import TagList from "./TagList";

function Project() {
  return (
    <article className="flex flex-col gap-6 justify-between py-4">
      <div className="flex bg-slate-800 rounded-xl p-3 gap-8">
        <img className="h-36 rounded-3xl" src={avatar} alt="avatar" />
        <div>
          <div id="project-name-tags" className="flex gap-6 items-center">
            <h3 className="text-xl font-bold">Project 1</h3>
            <TagList />
          </div>
          <p className="text-base max-w-prose mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Project;
