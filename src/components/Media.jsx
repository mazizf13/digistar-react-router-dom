import React from "react";

function Media() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-sky-600 mb-4">Profile</h1>
      <img
        src="/assets/profile.jpeg"
        alt="Media"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Media;
