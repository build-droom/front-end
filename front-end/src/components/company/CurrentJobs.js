import React from 'react';

const CurrentJobs = ({ jobs }) => {

  return (
    <ul>
      {jobs.map((job, index) => (
        <li key={index} ></li>
      ))}
    </ul>
  )
}

export default CurrentJobs;