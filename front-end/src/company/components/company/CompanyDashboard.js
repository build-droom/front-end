import React from 'react'



const CompanyDashboard = (props) => {

  console.log('dashboard',props)
 
  return (
    <div>
      <h1>DashBoard</h1>
      <h3><span onClick={() => props.history.push('/add-a-job') }>Add a Job</span></h3>
      <h3><span onClick={() => props.history.push('/current-jobs')}>Current Jobs</span></h3>
      <h3><span onClick={() => props.history.push('/edit-profile')}>Edit Profile</span></h3>
    </div>
  )
}

export default CompanyDashboard
