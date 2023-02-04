import PropTypes from "prop-types";

function PostCard({ post }) {
  return (
    <article className="flex flex-col w-full bg-slate-800 items-center h-96 rounded-xl">
      <img
        className="h-1/2 w-full object-cover rounded-t-xl"
        src={`${import.meta.env.VITE_BACKEND_ASSETS}/${post.thumbnail}`}
        alt="avatar"
      />
      <div className="flex flex-col gap-2 items-center py-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <h4 className="text-sm text-slate-500 italic">
          {new Date(post.date_created).toLocaleDateString()}
        </h4>
        <p className="text-base text-center overflow-hidden pb-4">
          {post.description.length > 100
            ? `${post.description.slice(0, 120)}...`
            : post.description}
        </p>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    date_created: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default PostCard;
