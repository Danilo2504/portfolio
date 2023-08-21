import React from "react";
import CodeTitle from "./CodeTitle";

function SectionBar() {
  return (
    <div className="flex justify-between items-center gap-8">
      <div className="border-b-2 border-white w-full" />
      <CodeTitle title={"Sobre Mi"} />
    </div>
  );
}

export default SectionBar;
