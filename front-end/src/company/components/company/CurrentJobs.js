import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentJobs = (props) => {
const [information, setInformation] =useState([]);

useEffect(() => {
  axios
  .get("https://droombwlambda.herokuapp.com/api/companies/jobs")
  .then(response => {
    console.log("This is the data", response.data)
    setInformation(response.data)
  })
  .catch(error => {
    console.log("the data returned this error: ", error)
  });
}, []);
  return (
    <ul>
      {props.map((job, index) => (
        <li key={index} data={job} ></li>
      ))}
    </ul>
  )
}

export default CurrentJobs;