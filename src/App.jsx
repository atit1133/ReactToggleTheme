import React from "react";
import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-black"
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        className="mb-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
      >
        Toggle Theme
      </button>
      <div className="flex justify-center items-center h-full">
        <h1 className="text-3xl font-bold">Welcome to Real world...</h1>
      </div>
    </div>
  );
};

export default App;
