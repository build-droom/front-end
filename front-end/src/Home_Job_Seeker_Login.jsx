import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {loginJobSeeker} from './jobSeeker/actions/jobSeekerLoginAction'

import { useDispatch, useSelector } from 'react-redux'

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
const Home_Job_Seeker_Login = (props) => {
	console.log('from home', props)
  const {handleSubmit, register, errors} = useForm()
  
  const dispatch = useDispatch();

	const onSubmit = values => {
		console.log(values);
		dispatch(loginJobSeeker(values)).then(res => {
		  console.log("this is from login", res);
		  props.history.push("/jobseeker-dashboard");
		});
	  };
	

	return (
		<HomeStyled>
			<img src={logo} alt='droom_logo' className='logo' />
			<StyledHeading>Sign In</StyledHeading>
			<Links>
				<LinkStyled> 
				Job Applicant
				</LinkStyled>
				<LinkStyled onClick={()=> props.history.push('/company-login')}>
					Company
				</LinkStyled>
			</Links>
			<Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          ref={register({
            required: "Required Field",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && errors.email.message}
        <Input
          name="password"
          placeholder="Password"
          type="password"
          ref={register({
            required: "You must enter a password",
            // style error messages. maybe turn red?
            minLength: {
              value: 8,
              message: "Password must have a least 8 characters"
            }
            // validation below was in the R-H-F docs, but not sure how to apply it to passwords.
            // validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.password && <p className="red">{errors.password.message}</p>}
        {/* add a 'Forgot Password' page if we get time.
        <Link to='/forgotpassword' /> */}
        <LinkStyled>Forgot Password?</LinkStyled>
        <LinkStyled to='/job-seeker-signup'>Don't have an account? Sign up!</LinkStyled>
        <ButtonStyled type="submit" onClick={handleSubmit(onSubmit)}>Sign in
        </ButtonStyled>
      </Form>
		</HomeStyled>
	);
};

export default Home_Job_Seeker_Login;




