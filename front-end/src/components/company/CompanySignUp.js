import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const CompanySignUp = () => {
  const { handleSubmit, register, errors, watch } = useForm({});

  const password = useRef({});
  password.current = watch('password', '');
  
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return(
    <div class='login-container'>
      <h1>DROOM</h1>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='email'
          placeholder='Email'
          ref={register({
            required: 'Required Field',
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
            // style error messages. maybe turn red? className='red'
            minLength: {
              value: 8,
              message: 'Password must contain at least 8 characters'
            },
            maxLength: {
              value: 20,
              message: 'Password must contain 20 characters or fewer'
            }
            // validation below was in the R-H-F docs, but not sure how to apply it to passwords.
            // validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.password && <p className='red'>{errors.password.message}</p>}

        <input 
          name='passwordRepeat'
          placeholder='Repeat Password'
          type='password'
          ref={register({
            validate: value =>
              value === password.current || 'The passwords do not match'
          })}
        />
        {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>}

        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};


export default CompanySignUp;