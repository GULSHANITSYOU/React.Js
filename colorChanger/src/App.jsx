import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColre] = useState("white");

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <div className="wraper">
          <button
            style={{ backgroundColor: "crimson" }}
            onClick={() => {
              setColre("red");
            }}>
            {" "}
            Red{" "}
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setColre("green");
            }}>
            {" "}
            Green{" "}
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setColre("blue");
            }}>
            {" "}
            Blue{" "}
          </button>
        
        </div>
      </div>
    </>
  );
}

export default App;
