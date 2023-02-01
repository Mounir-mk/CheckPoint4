import Hero from "../components/HomePage/Hero";
import ProjectSection from "../components/HomePage/ProjectSection";
import PostSection from "../components/HomePage/PostSection";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ProjectSection />
      <PostSection />
      <Footer />
    </>
  );
}

export default HomePage;
