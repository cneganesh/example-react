import React, { useState } from "react";
import { Save, ChevronDown } from "lucide-react";

const ProjectComponent = () => {
  const [work, setWork] = useState(false);
  const mainProject = [];
  const subProject = [];
  return (
    <div className="mt-10 mb-10 px-4 py-2 flex items-center justify-center ubuntu-r">
      <div className="px-8 py-4 flex flex-col gap-4 shadow-lg rounded-lg wx-auto">
        <div>
          <label className="ubuntu-m" htmlFor="main-project">
            Enter Project
          </label>
          <br />
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="main-project"
              placeholder="Enter Project"
            />
            <Save />
            <ChevronDown />
          </div>
        </div>
        <div>
          <label className="ubuntu-m" htmlFor="main-project">
            Enter Sub Project
          </label>
          <br />
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="main-project"
              placeholder="Enter Sub Project"
            />
            <Save />
            <ChevronDown />
          </div>
        </div>

        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-500">
          submit
        </button>
      </div>
    </div>
  );
};

export default ProjectComponent;
