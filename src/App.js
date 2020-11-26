import React from "react";
import "./App.css";
import Scene from "./Components/Scene";
import SceneFiber from "./Components/Scene fiber/SceneFiber";

function App() {
  return (
    <div className="App">
        <SceneFiber />
     {/*    <Scene  /> */}
    </div>
  );
}

export default App;
