import PropTypes from "prop-types";
import PostCard from "./PostCard";

function PostSection({ posts }) {
  return (
    <section id="posts" className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Récents Posts</h1>
        <h2>Voir Tous les Postes</h2>
      </div>
      <div className="w-full grid grid-cols-3 gap-8">
        {posts
          .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
          .slice(0, 3)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </section>
  );
}

PostSection.propTypes = {
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

export default PostSection;
