import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [password, setpassword] = useState("gulshan");
  const [length, setlength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const copypassword = useRef(null);

  const copy = ()=>{
    copypassword.current.select();
    navigator.clipboard.writeText(password);
  }

  const passwordGenerator  = useCallback(()=>{

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = ""; 

    if(useNumber)
      str += "1234567890"; 
    if(useChar)
      str += `~!@#$%^&*()_-+=][{}|';:"/.,<>?</>`;

    for(let i = 0 ; i<length ; i++){
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }

    setpassword(pass);   

  } , [length , useChar , useNumber ])

  useEffect(()=>{
    passwordGenerator();
  },[length,useChar,useNumber])

  

  return (
    <div className="bg-black w-full h-screen text-pink-50 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-extrabold">Namste Ji !!</h1>
      <h1 className="text-center text-2xl font-extrabold mb-10">
        {" "}
        I am password Generator 🥹 !!
      </h1>

      <div className="bg-white min-w-fit text-black p-8 rounded-2xl">
        <form onSubmit={(e)=> e.preventDefault() } className="bg-slate-600 p-4 rounded-md">
          <input
            className="w-96  py-1 px-3 font-semibold rounded-md"
            type="text"
            value={password}
            readOnly
            ref={copypassword}
          />
          <button onClick={(e)=>{
            copy(); 
            e.target.style.backgroundColor = "#212121"
            setTimeout(()=>{e.target.style.backgroundColor = ""} , 50)
            

          }} className="ml-4 bg-blue-700 py-1 px-3 font-bold rounded-lg">
            Copy
          </button>
        </form>

        <div className="flex font-medium bg-orange-200 mt-3 rounded-md py-2 px-4 gap-5  items-center justify-center">
          <label htmlFor="passwordSize">length:{length}</label>
          <input
            min={8}
            max={20}
            type="range"
            onChange={(e) => setlength(e.target.value)}
            name="passwordSize"
            id="passwordSize"
          />

          <label htmlFor="numberAllow">Number:</label>
          <input type="checkbox" onChange={(e)=> setUseNumber(e.target.checked)} name="" id="numberAllow" />
          <label htmlFor="charcterAllow">symbol:</label>
          <input type="checkbox" onChange={(e)=> setUseChar(e.target.checked)} name="" id="charcterAllow" />
        </div>
      </div>

   
    </div>
  );
}

export default App;
