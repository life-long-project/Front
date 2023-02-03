import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function JobDetails() {
  const [jobDetails, setJobDetails] = useState({});
  let {id} = useParams();

  async function getJobDetails(id) {
    let { data } = await axios.get(
      `https://back-ph2h.onrender.com/jobs/${id}`
    );
    setJobDetails(data);
  }

  useEffect(() => {
    getJobDetails(id);
  }, []);


  return (
    <>
    <div className="row">
      <p>{id}</p>
    </div>
    </>
  )
}
