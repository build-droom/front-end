import React from 'react';
import { useForm } from 'react-hook-form';
import { postJob } from './../../actions/companyAPIAction';
import { useDispatch } from 'react-redux';
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

const AddJob = props => {
	const { handleSubmit, register, errors } = useForm();
	const dispatch = useDispatch();

  {/*const onSubmit = values => {
    console.log(values);
    // saveJob(job);
    axios.post('ttps://droombwlambda.herokuapp.com/api/companies/job', values)
      .then((res) => {
        props.history.push('/currentjobs')
      })
      .catch(err => {
        console.log('Error posting job', err);
      })
  }
// need to refresh form after submission
  return (
    <div>
      <h3>Add a Job</h3>
      <form className='addJob' onSubmit={handleSubmit(onSubmit)}>
        <input 
          name='jobTitle'
          placeholder='Job Title'
          ref={register({
            required: 'Job Title required',
            minLength: {
              value: 4,
              message: 'Job Title must contain at least 4 characters'
            },
            maxLength: {
              value: 20,
              message: 'Job Title must contain 20 or fewer characters'
            }
          })}
        />
        {errors.jobTitle && errors.jobTitle.message}
*/}

	const onSubmit = values => {
		console.log(values);
		dispatch(postJob(values)).then(res => {
			console.log('this is from company add job', res);
			props.history.push('/company-dashboard');
		});
	};

	// need to refresh form after submission
	return (
		<HomeStyled>
			<StyledDashboardHeading>DROOM</StyledDashboardHeading>
			{/* Insert company img if we get time*/}

			
			<Form className='addJob' onSubmit={handleSubmit(onSubmit)}>
				<PurpleText className='addJobText'>Add Job</PurpleText>
				<Input
					name='job_position'
					placeholder='Job Title'
					ref={register({
						required: 'Job Title required',
						minLength: {
							value: 4,
							message: 'Job Title must contain at least 4 characters'
						},
						maxLength: {
							value: 20,
							message: 'Job Title must contain 20 or fewer characters'
						}
					})}
				/>
				{errors.job_position && errors.job_position.message}

				<Input
					name='job_location'
					placeholder='Location'
					ref={register({
						required: 'Location required',
						minLength: {
							value: 3,
							message: 'Location must contain at least 3 characters'
						},
						maxLength: {
							value: 30,
							message: 'Location must contain 30 or fewer characters'
						}
					})}
				/>
				{errors.job_location && errors.job_location.message}

				{/* <select name='employment-type' ref={register}>
					<option value='Full-Time'>Full-Time</option>
					<option value=' Part-Time'> Part-Time</option>
					<option value=' Internship'> Internship</option>
					<option value=' Seasonal'> Seasonal</option>
					<option value=' Contract'> Contract</option>
				</select>
				{errors.employmentType && errors.employmentType.message} */}

				{/* <input
					name='requiredExperience'
					placeholder='Required Experience'
					ref={register({
						required: 'Required Experience required',
						maxLength: {
							value: 15,
							message: 'Required Experience must contain 30 or fewer characters'
						}
					})}
				/>
				{errors.requiredExperience && errors.requiredExperience.message} */}

				<Input
					name='salary'
					placeholder='Salary'
					ref={register({
						required: 'Salary required',
						minLength: {
							value: 4,
							message: 'Salary must contain at least 4 characters'
						},
						maxLength: {
							value: 20,
							message: 'Salary must contain 30 or fewer characters'
						}
					})}
				/>
				{errors.salary && errors.salary.message}

				<DashboardButton type='submit'>Post Job</DashboardButton>
			</Form>
		</HomeStyled>
	);
};

export default AddJob;
