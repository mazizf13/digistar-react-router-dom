import React from "react";

function Contacts() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">My Contact</h2>
      <p className="text-gray-700">
        You can reach me{" "}
        <a href="mailto:aztyc@gmail.com" className="text-blue-500 underline">
          aztyc@gmail.com
        </a>{" "}
        or call me <span className="font-semibold">+6281000909090</span>.
      </p>
    </div>
  );
}

export default Contacts;
