import React from "react";
import Tag from "./Tag";

function TagList() {
  return (
    <section id="tags" className="flex gap-2">
      <Tag />
      <Tag />
      <Tag />
    </section>
  );
}

export default TagList;
