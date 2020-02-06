import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	StyledDashboardHeading,
	DashboardButton
} from '../../../styledcomp/Home';

import { useDispatch } from 'react-redux';
import { deleteData } from '../../actions/';

import { axiosWithAuthCompany } from '../../utils/axiosWithAuthCompany';

const CompanyEditProfile = props => {
	const { handleSubmit, register, errors } = useForm({});

	const dispatch = useDispatch();

	const onSubmit = values => {
		axiosWithAuthCompany()
			.put('/companies', values)
			.then(res => {
				console.log('this is edit profile', res);
				props.history.push('/company-dashboard');
			});
	};

	const deleteProfile = data => {
		console.log('hello from company', data);
		dispatch(deleteData(data)).then(res => {
			console.log('this is from signup', res);
			props.history.push('/');
		});
	};

	return (
		<HomeStyled class='company-edit-container'>
			<StyledDashboardHeading>DROOM</StyledDashboardHeading>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<PurpleText className='addJobText'>Edit Profile</PurpleText>
				<Input
					type='text'
					placeholder='Company'
					name='company_name'
					ref={register({
						required: 'You must enter a company name',
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
				<Input
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
				<Input
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

				<Input
					type='textarea'
					placeholder='Company'
					name='company_description'
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
				<Input
					type='text'
					placeholder='Company Location'
					name='company_location'
					ref={register({
						required: 'You must enter a company location',
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
				<Input
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
				<DashboardButton onClick={onSubmit}>Save</DashboardButton>
			</Form>
			<button onClick={deleteProfile}>Delete Profile</button>
		</HomeStyled>
	);
};

export default CompanyEditProfile;
