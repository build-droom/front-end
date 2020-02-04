
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {loginCompany} from './company/actions';
import { useDispatch, useSelector } from 'react-redux';

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
const Home = (props) => {
	const { handleSubmit, register, errors, watch } = useForm();

  const state = useSelector(state => state.companyLoginReducer)

  const dispatch = useDispatch()

  console.log(state)
  console.log(props)
  
  const onSubmit = values => {
    console.log(values);
    dispatch(loginCompany(values))
    .then(res => {
      console.log('this is from login', res)
        props.history.push('/company-dashboard')
    })
	}

	const swapUser = watch('swapUser');

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

			<Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name='company_email'
          placeholder='Email'
          type='email'
          ref={register({
            required: 'Email address required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && errors.email.message}
        <Input
          name='password'
          placeholder='Password'
          type='password'
          ref={register({
            required: 'You must enter a password',
            // style error messages. maybe turn red?
            minLength: {
              value: 8,
              message: 'Password must contain at least 8 characters'
            }
          })}
        />
        {errors.password && <p className='red'>{errors.password.message}</p>}

				{/* {swapUser && (
				<Input
				name='swapUser'
				placeholder='Email'
				ref={register({
					required: 'Email address required',
					pattern: {
						value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						message: 'Invalid email address'
					}
				})}
			/>
			)} */}
        {/* add a 'Forgot Password' page if we get time.
        <Link to='/forgotpassword'>Forgot Password?</Link> */}
        <Link to='/signup'>Don't have an account? Sign up today!</Link>
        <Route path='/signup' />
        
        <ButtonStyled type='submit' onClick={handleSubmit(onSubmit)}>Sign in</ButtonStyled>
      </Form>



			{/* <Form>
				<Input
					name='email'
					placeholder='Email'
					ref={register({
						required: 'Email address required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Invalid email address'
						}
					})}
				/>
				{errors.email && errors.email.message}
				<Input
					name='password'
					placeholder='Password'
					type='password'
					ref={register({
						required: 'You must enter a password',
						// style error messages. maybe turn red?
						minLength: {
							value: 8,
							message: 'Password must contain at least 8 characters'
						}
						// validation below was in the R-H-F docs, but not sure how to apply it to passwords.
						// validate: value => value !== "admin" || "Nice try!"
					})}
				/>
				{errors.password && <p className='red'>{errors.password.message}</p>}

				<ButtonStyled type='submit' onClick={handleSubmit(onSubmit)}>Sign in</ButtonStyled>
			</Form> */}

			{/* add a 'Forgot Password' page if we get time. Else, just redirect to SignUp page.
			<Link to='/forgotpassword'>Forgot Password?</Link> */}
			<LinkStyled>Forgot Password?</LinkStyled>
			<LinkStyled to='/signup'>Already have an account? Sign up!</LinkStyled>
			<Route path='/signup' />
			<ButtonStyled>Sign in</ButtonStyled>
			

		</HomeStyled>
	);
};


// import logo from "./images/droom-logo.svg";
// import {
//   HomeStyled,
//   StyledHeading,
//   Form,
//   Input,
//   Links,
//   LinkStyled,
//   ButtonStyled
// } from "./styledcomp/Home";

// //creating here the login form for the user with a route and link to the company's
// //and for the signup as well
// const Home = props => {
//   console.log("from home", props);
//   const { handleSubmit, register, errors }	const stat
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log(JobSeeker"s from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log(s from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log(s from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log(s from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log("this is from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log("this is from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
// 	const onSubmit = values => {
// 		console.log(values);
// 		dispatch(loginCompany(values)).then(res => {
// 		  console.log("this is from login", res);
// 		  props.history.push("/company-dashboard");
// 		});
// 	  };
// 	 = useSelector(state => state.jobSeekerLoginReducer)
//   return (
//     <HomeStyled>
//       <img src={logo} alt="droom_logo" className="logo" />
//       <StyledHeading>Sign In</StyledHeading>
//       <Links>
//         <LinkStyled>Job Applicant</LinkStyled>
//         <LinkStyled onClick={() => props.history.push("/company-login")}>
//           Company
//         </LinkStyled>
//       </Links>
//       <Form>
//         <Input placeholder="username" />
//         <Input />
//         <LinkStyled>Forgot Password?</LinkStyled>
//         <LinkStyled>Don't have an account? Sign up!</LinkStyled>
//         <ButtonStyled>Sign in</ButtonStyled>
//       </Form>
//     </HomeStyled>
//   );
// };

// export default Home;
