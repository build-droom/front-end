import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom';
import AddJob from './AddJob';
import CurrentJobs from './CurrentJobs';


// I'd like "Add a Job" to become a dropdown form when clicked. Or maybe a popover?
const CompanyDashboard = () => {
  const [jobs, setJobs] = useState([]);
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to='/addJob'><h3>Add a Job</h3></Link>
      <Route path='/addJob' render={props => <AddJob saveJob={console.warn} />}/>
      <Link to='/currentJobs'><h3>Current Jobs</h3></Link>
      <Route path='/currentJobs' render={props => <CurrentJobs jobs={jobs} />} />
      <h3>Edit Profile</h3>

      
    </div>
  )
}

export default CompanyDashboard
