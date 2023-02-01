import PropTypes from "prop-types";
import avatar from "../../assets/avatar.png";

function PostCard({ text }) {
  return (
    <article className="flex flex-col w-full bg-slate-800 items-center h-96 rounded-xl">
      <img
        className="h-1/2 w-full object-cover rounded-t-xl"
        src={avatar}
        alt="avatar"
      />
      <div className="flex flex-col gap-2 items-center py-4">
        <h3 className="text-xl font-bold">Post 1</h3>
        <h4 className="text-sm text-slate-500 italic">
          Lorem ipsum dolor sit amet
        </h4>
        <p className="text-base text-center overflow-hidden pb-4">
          {text.length > 100 ? `${text.slice(0, 120)}...` : text}
        </p>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PostCard;
