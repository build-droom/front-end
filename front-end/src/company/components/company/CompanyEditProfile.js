import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


import { postData } from '../../actions/companyAPIAction'
import { useDispatch, useSelector } from "react-redux";




const CompanyEditProfile = (props) => {


  const { handleSubmit, register, errors, watch } = useForm({});
  const dispatch = useDispatch();
  
  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = data => {
    console.log('hello from company', data);
    dispatch(postData(data)).then(res => {
      console.log("this is from signup", res);
      props.history.push("/");
    });
  };


  return(
    <div class='login-container'>
      <h1>DROOM</h1>
      <h2>Company Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        type="text" 
        placeholder="Company" 
        name="company_name" 
        ref={register({required: "You must enter a company name", 
        minLength: {
          value: 2,
          message: 'Company name must contain at least 2 characters'
        },
        maxLength: {
          value: 30,
          message: 'Password must contain 30 characters or fewer'
        }
        })} 
        />
        <input 
          name='company_email'
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
        <input 
        type="textarea" 
        placeholder="Company" 
        name="company_description" 
        ref={register({required: "You must enter a company description", 
        minLength: {
          value: 10,
          message: 'Description must be at least 10 characters long'
        },
        maxLength: {
          value: 300,
          message: 'Description must be 300 characters or less'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Company Location" 
        name="company_location" 
        ref={register({required: "You must enter a company location", 
        minLength: {
          value: 2,
          message: 'Company location must contain at least 2 characters'
        },
        maxLength: {
          value: 20,
          message: 'Company location must contain 20 characters or fewer'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Industry" 
        name="industry_type" 
        ref={register({required: "You must enter an Industry type", 
        minLength: {
          value: 2,
          message: 'Industry type must contain at least 2 characters'
        },
        maxLength: {
          value: 20,
          message: 'Industry type must contain 20 characters or fewer'
        }
        })} 
        />
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};
export default CompanyEditProfile;
=======
const CompanyEditProfile = () => {
  const { handleSubmit, register, errors, watch } = useForm({});

  const password = useRef({});
  password.current = watch('password', '');
  
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return(
    <div class='company-edit-container'>
      <h1>DROOM</h1>
      <h2>Company Edit Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        type="text" 
        placeholder="Company" 
        name="company_name" 
        ref={register({required: "You must enter a company name", 
        minLength: {
          value: 2,
          message: 'Company name must contain at least 2 characters'
        },
        maxLength: {
          value: 30,
          message: 'Password must contain 30 characters or fewer'
        }
        })} 
        />
        <input 
          name='company_email'
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
        <input 
        type="textarea" 
        placeholder="Company" 
        name="company_description" 
        ref={register({required: "You must enter a company description", 
        minLength: {
          value: 10,
          message: 'Description must be at least 10 characters long'
        },
        maxLength: {
          value: 300,
          message: 'Description must be 300 characters or less'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Company Location" 
        name="company_location" 
        ref={register({required: "You must enter a company location", 
        minLength: {
          value: 2,
          message: 'Company location must contain at least 2 characters'
        },
        maxLength: {
          value: 20,
          message: 'Company location must contain 20 characters or fewer'
        }
        })} 
        />
        <input 
        type="text" 
        placeholder="Industry" 
        name="industry_type" 
        ref={register({required: "You must enter an Industry type", 
        minLength: {
          value: 2,
          message: 'Industry type must contain at least 2 characters'
        },
        maxLength: {
          value: 20,
          message: 'Industry type must contain 20 characters or fewer'
        }
        })} 
        />
        <input type='submit' onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
};


export default CompanyEditProfile;
