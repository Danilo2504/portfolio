import React from "react";

function InputText({ placeholder, inputType, isTextArea, value, onChange }) {
  return (
    <div>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={5}
          required={true}
          className="border border-1 border-main rounded-[2.5px] bg-secondary w-full px-6 py-3 font-poppins text-white placeholder-[--white_secondary] input"
        />
      ) : (
        <input
          placeholder={placeholder}
          type={inputType}
          onChange={onChange}
          value={value}
          required={true}
          className="border border-1 border-main rounded-[2.5px] bg-secondary h-10 w-full px-6 py-3 font-poppins text-white placeholder-[--white_secondary] input"
        />
      )}
    </div>
  );
}

export default InputText;
