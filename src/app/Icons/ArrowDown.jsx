import * as React from "react";
const ArrowDown = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={8}
    fill="none"
    viewBox="0 0 16 10"
  >
    <path
      stroke={color}
      className="ease-in-color"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 1.5 7 7 7-7"
    />
  </svg>
);
export default ArrowDown;
