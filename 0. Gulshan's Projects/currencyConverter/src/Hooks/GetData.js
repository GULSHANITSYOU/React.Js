import { useEffect, useState } from "react";

const GetData = (currency) => {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/79bb3e2d038c0d73d181ba81/latest/${currency}`
    )
      .then((res) => res.json())
      .then((res) => setdata(res["conversion_rates"]));
  }, [currency]);

  return data;
};

export default GetData;
