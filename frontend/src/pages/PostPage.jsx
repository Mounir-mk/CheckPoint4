import React from "react";
import PostCard from "../components/HomePage/PostCard";

function PostPage() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor
sit amet.`;
  return (
    <>
      <section id="post-page-title" className="px-3 py-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Random title here</h1>
          <div className="mt-3 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </section>
      <section id="post-page-content" className="grid grid-cols-3 gap-8">
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
        <PostCard text={text} />
      </section>
    </>
  );
}

export default PostPage;
