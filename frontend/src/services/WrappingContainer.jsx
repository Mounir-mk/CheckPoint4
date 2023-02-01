import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function WrappingContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div
        id="container"
        className="mx-auto max-w-screen-lg h-full text-white flex flex-col gap-6"
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
