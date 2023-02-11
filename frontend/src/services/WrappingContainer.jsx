import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";

function WrappingContainer({ children }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div
        id="container"
        className="h-screen flex flex-col justify-between bg-slate-900 text-white mx-auto md:max-w-screen-lg px-4"
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
