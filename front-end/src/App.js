import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompanyLoginForm from './components/company/CompanyLoginForm';
import CompanySignUp from './components/company/CompanySignUp';
import CompanyDashboard from './components/company/CompanyDashboard'
import ProtectedRouteCompany from './utils/ProtectedRouteCompany'


function App() {
  return (
    <div className="App">

      <Route exact path='/company-login' component={CompanyLoginForm}/>
      <Route path='/company-signup' component={CompanySignUp} />
      
      <Route path="/company-dashboard" component={CompanyDashboard} />
      
      {/* Temporary Nav Links */}
      <Link to='/'>Home</Link>
      <Link to='/company-login'>Login</Link>
      <Link to='/company-signup'>Signup</Link>
      <Link to='/company-dashboard'>Dashboard</Link>
      
    </div>
  );
}

export default App;
