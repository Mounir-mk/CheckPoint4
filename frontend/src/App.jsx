import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div
        id="container"
        className="mx-auto max-w-screen-lg h-full text-white flex flex-col gap-6"
      >
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
