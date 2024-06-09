import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-500 h-screen flex items-center justify-center  flex-col  ">
      <h1 className="text-6xl font-extrabold">Theme Changer</h1>

      <div className="flex w-3/5 bg-slate-400 rounded-md p-2 items-center justify-center gap-x-3   ">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">crimson</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">sky blue</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">yello green</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Dark</button>
      </div>
    </div>
  );
}

export default App;
