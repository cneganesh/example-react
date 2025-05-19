import React, { useState, useEffect } from "react";
import { Save, ChevronDown, Trash2, SquarePen } from "lucide-react";

const ProjectComponent = () => {
  const [work, setWork] = useState(false);
  const [mainProj, setMainProj] = useState("");
  const [subProj, setSubProj] = useState("");

  useEffect(() => {
    console.log(mainProj);
  }, [mainProj, subProj]);

  const [mainProject, setMainProject] = useState([]);
  const [subProject, setSubProject] = useState([]);

  const deleteItem = (id) => {
    const updatedItems = mainProject.filter((item) => item !== id);
    setMainProject(updatedItems);
  };
  const handleUpdate = (id) => {
    //handle update
  };
  const handleKeyDown = (event) => {
    if (mainProj != "" && event.key === "Enter") {
      mainProject.push(mainProj);
      setMainProj("");
      console.log(mainProject);
    }
  };
  const handleSave = () => {
    if (mainProj != "") {
      mainProject.push(mainProj);
      setMainProj("");
      console.log(mainProject);
    } else {
      alert("Please enter project name before save");
    }
  };
  return (
    <div className="mt-10 mb-10 px-4 py-2 flex items-center justify-center ubuntu-r">
      <div className="px-8 py-4 flex flex-col gap-4 shadow-lg rounded-lg wx-auto">
        <div className="w-full relative">
          <label className="ubuntu-m" htmlFor="main-project">
            Enter Project
          </label>
          <br />
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="main-project"
              value={mainProj}
              placeholder="Enter Project"
              onChange={(e) => setMainProj(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Save onClick={handleSave} />
            <ChevronDown
              className={`${
                work ? "rotate-180 transition-all" : "transition-all"
              }`}
              onClick={() => {
                mainProject.length != 0
                  ? setWork((prev) => !prev)
                  : setWork(false);
              }}
            />
          </div>
          {work && (
            <ul
              id="dropdown"
              className="z-10 absolute bg-gray-500 border border-black-300 w-full bg-grey-700"
            >
              {mainProject.map((item, index) => (
                <li key={index} className="flex items-center gap-2 px-2 py-2">
                  <div
                    className="flex-1"
                    onClick={() => {
                      setMainProj(item);
                      setWork(false);
                    }}
                  >
                    {}. {item}
                  </div>
                  <button onClick={() => deleteItem(item)}>
                    <Trash2 />
                  </button>
                  <button onClick={() => handleUpdate(index)}>
                    <SquarePen />
                  </button>
                </li>
              ))}
            </ul>
          )}
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
