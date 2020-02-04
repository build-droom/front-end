import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Route } from 'react-router-dom'
import styled from 'styled-components';
import {loginJobSeeker} from '../actions/jobSeekerLoginAction'

import { useDispatch, useSelector } from 'react-redux'



const JobSeekerLoginForm = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const state = useSelector(state => state.jobSeekerLoginReducer)

  const dispatch = useDispatch()

  console.log(state)
  console.log(props)
  
  const onSubmit = values => {
    console.log(values);
    dispatch(loginJobSeeker(values))
    .then(res => {
      console.log('this is from login', res)
        props.history.push('/job-seeker-dashboard')
    })
    
  }


  return (
    <div class='login-container'>
      <h1>DROOM</h1>
      <h2>Job Seeker Sign In </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          ref={register({
            required: 'Required Field',
            validate: value => value != "admin" || "Nice Try!"
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
              message: 'Password must have a least 8 characters'
            }
            // validation below was in the R-H-F docs, but not sure how to apply it to passwords.
            // validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.password && <p className='red'>{errors.password.message}</p>}
        {/* add a 'Forgot Password' page if we get time.
        <Link to='/forgotpassword' /> */}
        <Link to='/signup' />
        <Route path='/signup' />
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};
export default JobSeekerLoginForm;