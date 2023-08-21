import React from "react";

function CodeTitle({ title }) {
  return (
    <div className="text-white min-w-max flex items-center gap-3 font-rubik font-regular text-medium_big">
      <span>{"<"}</span>
      <span className="text-main">{title}</span>
      <span>{"/>"}</span>
    </div>
  );
}

export default CodeTitle;
