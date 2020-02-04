import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home_Job_Seeker_Login from './Home_Job_Seeker_Login';
import CompanyLoginForm from './company/components/company/CompanyLoginForm';
import JobSeekerLoginForm from './jobSeeker/components/JobSeekerLoginForm';

import CompanySignUp from './company/components/company/CompanySignUp';

import JobSeekerSignUp from './jobSeeker/components/JobSeekerSignUp';
import CompanyDashboard from './company/components/company/CompanyDashboard';
import JobSeekerDashBoard from './jobSeeker/components/JobSeekerDashBoard';
import AddJob from './company/components/company/AddJob';
import CurrentJobs from './company/components/company/CurrentJobs';
import CompanyEditProfile from './company/components/company/CompanyEditProfile';
import ProtectedRouteCompany from './company/utils/ProtectedRouteCompany';

function App() {
	return (
		<Router>
			<div className='App'>
				{/* <Link to='/'>Home</Link>
				<Link to='/job-seeker-login'>Login</Link>
				<Link to='/job-seeker-signup'>Signup</Link>
				<Link to='/company-dashboard'>Dashboard</Link> */}
				<Route exact path='/' component={Home_Job_Seeker_Login} />
				<Route exact path='/company-login' component={CompanyLoginForm} />
				<Route path='/company-signup' component={CompanySignUp} />
				<Route exact path='/job-seeker-login' component={JobSeekerLoginForm} />
				<Route path='/job-seeker-signup' component={JobSeekerSignUp} />

				{/* these will all be protected Routes */}
				<ProtectedRouteCompany
					path='/company-dashboard'
					component={CompanyDashboard}
				/>
				<ProtectedRouteCompany
					path='/jobseeker-dashboard'
					component={JobSeekerDashBoard}
				/>
				<ProtectedRouteCompany path='/add-a-job' component={AddJob} />
				<ProtectedRouteCompany path='/current-jobs' component={CurrentJobs} />
				<ProtectedRouteCompany
					path='/edit-profile'
					component={CompanyEditProfile}
				/>

				{/* Temporary Nav Links */}
				<Link to='/' >Home</Link>
				<Link to='/company-login'>Login</Link>
				<Link to='/company-signup'>Signup</Link>
				<Link to='/company-dashboard'>Dashboard</Link>
				
			</div>
		</Router>
	);
}

export default App;
