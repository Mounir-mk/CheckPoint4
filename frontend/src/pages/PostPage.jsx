import React, { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/post/${postId}`
      );
      setPost(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  if (loading) {
    return <Loader />;
  }

  const { title, content, thumbnail } = post;

  return (
    <section
      id="post-page"
      className="flex flex-col items-center gap-6 px-4 my-6"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <h2 className="text-sm text-slate-500 italic">
        {new Date(post.date_created).toLocaleDateString()}
      </h2>
      <div className="w-96 flex justify-center items-center pb-8 border-b-2 border-slate-500">
        <img
          className="h-72 object-cover rounded-xl border-2 border-slate-500"
          src={`${import.meta.env.VITE_BACKEND_ASSETS}/${thumbnail}`}
          alt="thumbnail"
        />
      </div>
      <div>{parse(content)}</div>
    </section>
  );
}

export default PostPage;
