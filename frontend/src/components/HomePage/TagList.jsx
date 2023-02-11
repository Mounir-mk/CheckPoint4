import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

function TagList({ tags }) {
  return (
    <section id="tags" className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </section>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
