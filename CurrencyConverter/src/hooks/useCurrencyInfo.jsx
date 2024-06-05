import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/dedfc2ab7b8c6bad282aed76/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => {setData(res["conversion_rates"
      ] ) ;console.log(res["conversion_rates"
      ]);});
  },[currency]);
  return data;
};

export default useCurrencyInfo;


