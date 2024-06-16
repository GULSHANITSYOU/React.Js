const InputField = ({
  dir,
  currencys = ["USD", "INR"],
  onCurrencyChange,
  onChangeAmount,
  amount,
  currency
}) => {
  const handleAmountChange = (e) => {
    onChangeAmount(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <div className="form bg-slate-400 w-11/12 p-4 rounded-md">
      <div className="from flex flex-col gap-4">
        <div className="label flex justify-between font-bold text-2xl">
          <label htmlFor="inputNum">{dir}</label>
          <label htmlFor="currencyChoose">Currency</label>
        </div>
        <div className="input flex justify-between">
          <input
            type="number"
            id="inputNum"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-96 rounded-sm p-1 font-semibold"
          />
          <select
            name="currency"
            id="currencyChoose"
            className="bg-blue-500 py-2 px-4 font-bold"
            value={currency}
            onChange={handleCurrencyChange}
          >
            {currencys.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputField;
