import { Routes, Route } from "react-router-dom";
import WrappingContainer from "./services/WrappingContainer";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Admin from "./pages/Admin";
import AdminDescription from "./pages/AdminDescription";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <WrappingContainer>
            <HomePage />
          </WrappingContainer>
        }
      />
      <Route
        path="/posts"
        element={
          <WrappingContainer>
            <PostPage />
          </WrappingContainer>
        }
      />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/description" element={<AdminDescription />} />
    </Routes>
  );
}

export default App;
