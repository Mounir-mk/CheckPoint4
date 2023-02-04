import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import WrappingContainer from "./services/WrappingContainer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import Loader from "./components/Loader";

function App() {
  const [projects, setProjects] = useState([]);
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/profile`
      );
      setProfile(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/project?fields=*,tag.tag_id.name`
      );
      const dataFetched = res.data.data;
      const newProjects = dataFetched.map((project) => {
        const oldProject = project;
        const tags = oldProject.tag.map((tag) => tag.tag_id.name);
        delete oldProject.tag;
        return { ...oldProject, tags };
      });
      setProjects(newProjects);
    } catch (error) {
      console.error(error);
    }
  };

  const getPosts = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/post?fields=id,date_created,title,thumbnail,description`
      );
      setPosts(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
    getProjects();
    getPosts();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WrappingContainer>
            <HomePage profile={profile} projects={projects} posts={posts} />
          </WrappingContainer>
        }
      />
      <Route
        path="/posts"
        element={
          <WrappingContainer>
            <BlogPage posts={posts} />
          </WrappingContainer>
        }
      />
      <Route
        path="/posts/:postId"
        element={
          <WrappingContainer>
            <PostPage />
          </WrappingContainer>
        }
      />
    </Routes>
  );
}

export default App;
