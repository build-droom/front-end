import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { postData } from '../actions/jobSeekerAPIAction';
import { useDispatch, useSelector } from 'react-redux';

const JobSeekerSignUp = props => {
	const { handleSubmit, register, errors, watch } = useForm({});
	const dispatch = useDispatch();

	// const password = useRef({});
	// password.current = watch('password', '');

	const onSubmit = data => {
		console.log('hello from company', { data, isCompany: 'true' });
		dispatch(postData(data)).then(res => {
			console.log('this is from signup', res);
			props.history.push('/');
		});
	};

	return (
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

				{/* <input
          // name="passwordRepeat"
          placeholder="Repeat Password"
          type="password"
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        {errors.passwordRepeat && <p>{errors.passwordRepeat.message}</p>} */}
				<input
					type='textarea'
					placeholder='Company-descript'
					name='companies_description'
					ref={register({
						required: 'You must enter a company description',
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
					type='text'
					placeholder='Industry'
					name='industry_type'
					ref={register({
						required: 'You must enter an Industry type',
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

				<input
					type='text'
					placeholder='Location'
					name='seekers_location'
					ref={register({
						required: 'You must enter a Location',
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
					type='text'
					placeholder='Education'
					name='education'
					ref={register({
						required: 'You must enter highest form of Education',
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
