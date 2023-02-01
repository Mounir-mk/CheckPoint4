import { Routes, Route } from "react-router-dom";
import WrappingContainer from "./services/WrappingContainer";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <WrappingContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </WrappingContainer>
  );
}

export default App;
