import React from "react";
import PropTypes from "prop-types";

function Tag({ tag }) {
  return <h1 className="bg-red-600 rounded-full px-2">{tag}</h1>;
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
