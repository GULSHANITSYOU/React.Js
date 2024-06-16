import { useCallback, useEffect, useState } from "react";
import GetData from "./Hooks/GetData";
import InputField from "./Components/InputField";

function App() {
  const [from, setFrom] = useState("USD");
  const [to, setTO] = useState("INR");
  const [formAmount, setFormAamount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  let currencyData = GetData(from);

  const currencys = Object.keys(currencyData);

  function convertFrom() {
    const amount = formAmount * currencyData[to];
    setToAmount(amount.toFixed(2));
  }

  function swap(){
    setFrom(to);
    setTO(from); 
    setFormAmount(toAmount);
    setToAmount(formAmount);
  }

  useEffect(convertFrom, [formAmount, from, currencyData ,to]);

  return (
    <>
      <div className=" bg-black flex justify-center items-center w-screen h-screen ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-6/12 bg-white min-h-96 flex  flex-col gap-2 justify-center items-center rounded-xl">
          <InputField
            dir="From"
            currencyData={currencyData}
            currencys={currencys}
            onCurrencyChange={(currency) => setFrom(currency)}
            amount={formAmount}
            currency={from}
            onChangeAmount={(amount) => setFormAamount(amount)}></InputField>
            <button onClick={swap} className=" bg-blue-500 py-1 px-4 text-xl font-bold rounded-md">Swap</button>
          <InputField
            dir="To"
            currencyData={currencyData}
            onCurrencyChange={(currency) => setTO(currency)}
            currencys={currencys}
            amount={toAmount}
            currency={to}
            onChangeAmount={(amount) => setToAmount(amount)}></InputField>
        </form>
      </div>
    </>
  );
}

export default App;
