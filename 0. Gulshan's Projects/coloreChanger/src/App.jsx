import { useState } from "react";
import Button from "./components/Buttons/Button";

function App() {
  

  return (
    <>
      <div className=" h-screen flex items-center justify-center  flex-col  ">
        <h1 className="text-6xl font-extrabold">Theme Changer</h1>

        <div className="flex w-3/5 bg-slate-800 rounded-md p-2 items-center justify-center gap-x-3 fixed bottom-8    ">
          <Button bgcolor={"crimson"} buttonName={"crimson"}></Button>
          <Button bgcolor={"#87CEEB"} buttonName={"sky blue"}></Button>
          <Button bgcolor={"#98FB98"} buttonName={"Mint Green"}></Button>
          <Button bgcolor={"#E6E6FA"} buttonName={"Soft Lavender"}></Button>
          <Button bgcolor={"#212121"} buttonName={"Dark"}></Button>
        </div>
      </div>
      <div className="w-full h-screen"> </div>
      <div className="w-full h-screen"> </div>
    </>
  );
}

export default App;
