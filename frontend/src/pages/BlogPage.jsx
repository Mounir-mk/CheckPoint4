import React from "react";
import PropTypes from "prop-types";
import PostCard from "../components/HomePage/PostCard";

function BlogPage({ posts }) {
  return (
    <div id="container" className="my-6 flex-1 overflow-y-auto">
      <section id="post-page-title" className="px-3 pb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Bienvenue dans la partie Blog !
          </h1>
          <div className="mt-3 text-gray-200">
            Ici vous trouverez tous les articles que j'ai écrits.
          </div>
        </div>
      </section>
      <section
        id="post-page-content"
        className="grid grid-rows-3 md:grid-cols-3 grid-flow-row gap-8"
      >
        {posts
          .sort((a, b) => new Date(b.date_created) - new Date(a.date_created))
          .slice(0, 12)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </section>
    </div>
  );
}

BlogPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date_created: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
    })
  ).isRequired,
};

export default BlogPage;
