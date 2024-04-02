
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className=" w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className=" flex flex-wrap bg-white px-3 py-2 rounded-lg shadow-lg">
        <div className=" flex flex-wrap gap-4">

          <button
            onClick={() => setColor("red")} // onClick always take an function
            className=" px-3 py-2 rounded-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className=" px-3 py-2 rounded-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("orange")}
            className=" px-3 py-2 rounded-lg "
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>

          <button
            onClick={() => setColor("grey")}
            className=" px-3 py-2 rounded-lg"
            style={{ backgroundColor: "grey" }}
          >
            grey
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
