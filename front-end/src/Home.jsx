import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './images/droom-logo.svg';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled
} from './styledcomp/Home';

//creating here the login form for the user with a route and link to the company's
//and for the signup as well
const Home = () => {
	return (
		<HomeStyled>
			<img src={logo} alt='droom_logo' className='logo' />
			<StyledHeading>Sign In</StyledHeading>
			<Links>
				<LinkStyled>
					<a>Job Applicant</a>
				</LinkStyled>
				<LinkStyled>
					<a>Company</a>
				</LinkStyled>
			</Links>
			<Form>
				<Input placeholder='username' />
				<Input />
				<LinkStyled>Forgot Password?</LinkStyled>
				<LinkStyled>Already have an account? Sign up!</LinkStyled>
				<ButtonStyled>Sign in</ButtonStyled>
			</Form>
		</HomeStyled>
	);
};

export default Home;
