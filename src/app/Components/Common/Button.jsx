import React from "react";

function Button({ label, isValid, values }) {
  return (
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${values.email}&su=${values.subject}&body=${values.body}`}
      target="_blank"
      className={`${
        !isValid ? "disabled" : "text-white"
      } w-full h-10 rounded-[2.5px] bg-main cursor-pointer flex justify-center items-center text-medium_small font-poppins font-medium`}
    >
      {label}
    </a>
  );
}

export default Button;
