// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { loginJobSeeker } from "./jobSeeker/actions/jobSeekerLoginAction";

// import { useDispatch, useSelector } from "react-redux";

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
