import PropTypes from "prop-types";

function PostCard({ post }) {
  return (
    <article className="flex flex-col w-full bg-slate-800 items-center h-96 rounded-xl">
      <img
        className="h-1/2 w-full object-cover rounded-t-xl"
        src={post.image_url}
        alt="avatar"
      />
      <div className="flex flex-col gap-2 items-center py-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <h4 className="text-sm text-slate-500 italic">
          {post.created_at.slice(0, 10)}
        </h4>
        <p className="text-base text-center overflow-hidden pb-4">
          {post.content.length > 100
            ? `${post.content.slice(0, 120)}...`
            : post.content}
        </p>
      </div>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    created_at: PropTypes.string,
    content: PropTypes.string,
    image_url: PropTypes.string,
  }).isRequired,
};

export default PostCard;
