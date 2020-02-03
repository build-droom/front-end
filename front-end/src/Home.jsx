import React from 'react';
import logo from './images/droom-logo.svg';

//creating here the login form for the user with a route and link to the company's
//and for the signup as well
const Home = () => {
	return (
		<div className='home'>
			<img src={logo} alt='droom_logo' className='logo' />
			<h1>Sign In</h1>
			<form>
				<input />
				<input />
			</form>
		</div>
	);
};

export default Home;
