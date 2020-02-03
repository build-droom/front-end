import React from 'react'



const JobSeekerDashboard = (props) => {

  console.log('dashboard',props)
 
  return (
    <div>
      <h1>DashBoard</h1>
      <h3><span onClick={() => props.history.push('/search-for-jobs') }>Search For Jobs</span></h3>
      <h3><span onClick={() => props.history.push('/applied-jobs')}>Currently Applied For Jobs</span></h3>
      <h3><span onClick={() => props.history.push('/edit-profile')}>Edit Profile</span></h3>
    </div>
  )
}

export default JobSeekerDashboard