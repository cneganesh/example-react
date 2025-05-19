import { useState } from "react";
import DateTimeComponent from "./components/DateTimeComponent";
import AccentureNavbar from "./components/AccentureNavbar";
import ProjectComponent from "./components/ProjectComponent";

function App() {
  return (
    <>
      <AccentureNavbar />
      <DateTimeComponent />
      <ProjectComponent />
    </>
  );
}

export default App;
