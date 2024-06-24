import React from "react";

export const ActionButtonComponent = ({ src, alt, onClick, text, enabled }) => {
  return (
    <button
  type="button"
  className="text-white 
             bg-gradient-to-r from-cyan-500 to-blue-500 
             hover:bg-gradient-to-bl 
             focus:ring-4
              focus:outline-none 
              focus:ring-cyan-300 
              dark:focus:ring-cyan-800 
              font-medium rounded-lg 
              text-sm px-5 py-2.5 md:px-6  md:py-3 w-100 
              text-center mx-2 my-2"
     >
  
  
      <img
        src={src}
        alt={alt}
        className="max-w-full w-4 h-4 self-center"
        title={text}
      />
      <span className="text-xs">{text}</span>
    </button>
  );
};

export default ActionButtonComponent

