import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const JobSeekerSignUp = () => {
  const { handleSubmit, register, errors, watch } = useForm({});
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return(
    <div class='seeker-signup-container'>
      <h1>DROOM</h1>
      <h2>Job Seeker Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          ref={register({
            required: 'You must enter a username',
            minLength: {
            value: 6,
            message: 'Username must contain at least 6 characters'
            },
            maxLength: {
              value: 15,
              message: 'Username must contain 15 characters or less'
            }
          })}
        />
        <input
          type='text'
          name='full_name'
          placeholder='Name'
          ref={register({
            required: 'You must enter your Name',
            minLength: {
            value: 6,
            message: 'Name must contain at least 6 characters'
            },
            maxLength: {
              value: 40,
              message: 'Name must contain 40 characters or less'
            }
          })}
        />
        <input 
          name='seekers_email'
          placeholder='Email'
          type='email'
          ref={register({
            required: 'You must enter an Email',
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
              message: 'Password must have a least 8 characters'
            }
            // validation below was in the R-H-F docs, but not sure how to apply it to passwords.
            // validate: value => value !== "admin" || "Nice try!"
          })}
        />
        {errors.password && <p className='red'>{errors.password.message}</p>}

        <input 
          name='password_repeat'
          placeholder='Repeat Password'
          type='password'
          ref={register({
            validate: value =>
              value === password.current || 'The passwords do not match'
          })}
        />
        {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
        <input 
        type="text" 
        placeholder="Occupation" 
        name="occupation" 
        ref={register({required: "You must enter an Occupation", 
        minLength: {
          value: 3,
          message: 'Occupation must contain at least 3 characters'
        },
        maxLength: {
          value: 20,
          message: 'Occupation type must contain 20 characters or fewer'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Location" 
        name="seekers_location" 
        ref={register({required: "You must enter a Location", 
        minLength: {
          value: 3,
          message: 'Location must contain at least 3 characters'
        },
        maxLength: {
          value: 20,
          message: 'Location must contain 20 characters or fewer'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Education" 
        name="education" 
        ref={register({required: "You must enter highest form of Education", 
        minLength: {
          value: 3,
          message: 'Education must contain at least 3 characters'
        },
        maxLength: {
          value: 20,
          message: 'Education must contain 20 characters or fewer'
        }
        })} 
        />
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};


export default JobSeekerSignUp;