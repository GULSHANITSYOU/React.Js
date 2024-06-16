import { useCallback, useEffect, useState } from "react";
import GetData from "./Hooks/GetData";
import InputField from "./Components/InputField";

function App() {
   const [from , setFrom] = useState("USD");
   const [to ,setTO] = useState("INR"); 
   const [formAmount , setFormAamount] = useState(0); 
   const [toAmount , setToAmount] = useState(0);

   useEffect(()=>{
    console.log(from);
    console.log(to);

   },[from,to])




   let currencyData = GetData(from);

   const currencys = Object.keys(currencyData)

   
   
   


   


  return (
    <>
      <div className=" bg-black flex justify-center items-center w-screen h-screen ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-6/12 bg-white min-h-96 flex  flex-col gap-12 justify-center items-center rounded-xl">
          <InputField dir="From" 
          currencys = {currencys}
          onCurrencyChange = {(currency)=>setFrom(currency)}
           ></InputField>
          <InputField
           dir="To"
           onCurrencyChange = {(currency)=>setTO(currency)}
           currencys = {currencys} 
           ></InputField>
        </form>
      </div>
    </>
  );
}

export default App;
