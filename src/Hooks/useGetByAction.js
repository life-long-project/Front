import { useState } from "react";
import axios from "axios";

export const useGetByAction = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (url) => {
    setError(null);
    setIsPending(true);

    try {
      let { data } = await axios.get(url);
      console.log(data);
      setIsPending(false);
      setData(data);
      setError(null);
    } catch (err) {
      setIsPending(false);
      setData(null);
      setError("could not fetch the data");
      console.log(err.message);
    }
    console.log("hello");
  };

  return { getData, setData, data, isPending, error };
};
