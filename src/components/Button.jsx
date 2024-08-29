import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-sky-600 text-white py-2 px-4 rounded hover:bg-sky-500 transition"
    >
      {text}
    </button>
  );
};

export default Button;
