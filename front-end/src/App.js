import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompanyLoginForm from './company/components/company/CompanyLoginForm';
import CompanySignUp from './company/components/company/CompanySignUp';
import CompanyDashboard from './company/components/company/CompanyDashboard'
import AddJob from './company/components/company/AddJob'
import CurrentJobs from './company/components/company/CurrentJobs'
import CompanyEditProfile from './company/components/company/CompanyEditProfile'
import ProtectedRouteCompany from './company/utils/ProtectedRouteCompany'


function App() {
  return (
    <div className="App">

      <Route exact path='/company-login' component={CompanyLoginForm}/>
      <Route path='/company-signup' component={CompanySignUp} />
      


      {/* these will all be protected Routes */}
      <ProtectedRouteCompany path="/company-dashboard" component={CompanyDashboard} />
      <ProtectedRouteCompany path="/add-a-job" component={AddJob} />
      <ProtectedRouteCompany path="/current-jobs" component={CurrentJobs} />
      <ProtectedRouteCompany path="/edit-profile" component={CompanyEditProfile} />

      
      {/* Temporary Nav Links */}
      <Link to='/'>Home</Link>
      <Link to='/company-login'>Login</Link>
      <Link to='/company-signup'>Signup</Link>
      <Link to='/company-dashboard'>Dashboard</Link>
      
    </div>
  );
}

export default App;
