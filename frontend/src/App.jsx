import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import WrappingContainer from "./services/WrappingContainer";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Admin from "./pages/Admin";
import AdminDescription from "./pages/AdminDescription";
import AdminPosts from "./pages/AdminPosts";
import AdminLogin from "./pages/AdminLogin";
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
      setProfile(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/projects`
      );
      setProjects(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPosts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts`);
      setPosts(res.data);
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
            <PostPage posts={posts} />
          </WrappingContainer>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/description" element={<AdminDescription />} />
      <Route path="/admin/posts" element={<AdminPosts />} />
      <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
