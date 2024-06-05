import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Passowrd, setPassword] = useState("");
  const PassowrdRef = useRef(null); 

  const copyPassword = useCallback(()=>{
    PassowrdRef.current?.select();
    PassowrdRef.current?.setSelectionRange(0 , length);
    window.navigator.clipboard.writeText(Passowrd);
  } , [Passowrd])

  const passwordGenerator = useCallback(
    (length, numberAllowed, charAllowed) => {
      let pass = "";
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*(){}][|+-*/.?/:;`~";

      for (let index = 0; index < length; index++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str[char];
      }

      setPassword(pass);
    
      
    },
    [length, numberAllowed, charAllowed, setPassword]
  );

  useEffect(()=> passwordGenerator(length , numberAllowed ,charAllowed) , [length , charAllowed , numberAllowed , passwordGenerator] );

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white pt-5  text-2xl">
          Password Generater
        </h1>

        <div className="shadow rounded-lg overflow-hidden  p-4  flex">
          <input
            type="text"
            value={Passowrd}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="Password"
            readOnly
            ref={PassowrdRef}
          />

          <button onClick={copyPassword} className="outline-none bg-blue-500 hover:bg-blue-700 text-white px-3 py-03 shrink-0 mx-2 rounded-md">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-4 my-1">
          <div className="flex items-center gap-x-1 ">
            <input type="range" 
             min={6}
             max={20}
             value={length}
             onChange={(e)=>{setLength(e.target.value) }}
             className="cursor-pointer" />
             <label >length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1 my-1 ">
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            id="numberInput"        
             value={numberAllowed}
             onChange={()=>setNumberAllowed(prev => !prev) }
             className="cursor-pointer" />
             <label htmlFor="numberInput" >Nmbers</label>
          </div>

          <div className="flex items-center gap-x-1 my-1 ">
            <input type="checkbox" 
             id="charInput"
             defaultChecked  = {charAllowed}
             value={charAllowed}
             onChange={()=>setCharAllowed(prev => !prev)}
             className="cursor-pointer" />
             <label htmlFor="charInput" >Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
