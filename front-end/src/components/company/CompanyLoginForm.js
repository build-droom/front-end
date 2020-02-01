import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components';



const CompanyLoginForm = (props) => {
  const { handleSubmit, register, errors } = useForm();
  console.log(props)
  
  const onSubmit = values => {
    console.log(values);
    props.history.push('/company-dashboard')
  }


  return (
    <div class='login-container'>
      <h1>DROOM</h1>
      <h2>Sign In </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
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
        <input
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
        {/* Password is not currently being verified. I think that might need to connect to backend? */}
        {/* add a 'Forgot Password' page if we get time.
        <Link to='/forgotpassword'>Forgot Password?</Link> */}
        <Link to='/signup'>Don't have an account? Sign up today!</Link>
        <Route path='/signup' />
        
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};
export default CompanyLoginForm;