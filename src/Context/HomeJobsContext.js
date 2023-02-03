import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let HomeJobsContext = createContext(null);

export default function HomeJobsContextProvider(props) {
  const [jobs, setJobs] = useState([]);
  

  async function getHomeJobs() {
    let { data } = await axios.get("https://back-ph2h.onrender.com/jobs");
    setJobs(data);
  }

  
  async function searchedJobs(search) {
    let { data } = await axios.get(`https://back-ph2h.onrender.com/jobs/?q=${search}`);
    setJobs(data);
  }

  useEffect(() => {
    getHomeJobs();
  }, []);

  return (
    <HomeJobsContext.Provider value={{ jobs, searchedJobs }}>
      {props.children}
    </HomeJobsContext.Provider>
  );
}
