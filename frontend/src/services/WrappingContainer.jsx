import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function WrappingContainer({ children }) {
  const location = useLocation();
  const height =
    location.pathname === "/posts" || location.pathname === "/contact"
      ? "h-screen justify-between"
      : "";
  return (
    <div className="min-h-screen bg-slate-900">
      <div
        id="container"
        className={`flex flex-col ${height} gap-6 bg-slate-900 text-white mx-auto max-w-screen-lg`}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

WrappingContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WrappingContainer;
