import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { postJob } from './../../actions/companyAPIAction';
import { useDispatch } from 'react-redux';
import { axiosWithAuthCompany } from './../../utils/axiosWithAuthCompany';

const AddJob = props => {
	const { handleSubmit, register, errors } = useForm();
	const dispatch = useDispatch();

	{
		/*const onSubmit = values => {
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
*/
	}

	useEffect(() => {
		axiosWithAuthCompany()
			.get('/jobs')
			.then(res => {
				console.log(res.data);
			});
	});

	const id = localStorage.getItem('companyid');

	const onSubmit = values => {
		console.log(values);
		dispatch(postJob(values)).then(props.history.push('/company-dashboard'));
	};
	// need to refresh form after submission
	return (
		<div>
			<h3>Add a Job</h3>
			<form className='addJob' onSubmit={handleSubmit(onSubmit)}>
				<input
					name='companies_id'
					placeholder={id}
					value={id}
					ref={register({
						required: 'Salary required',
						minLength: {
							value: 1,
							message: 'Salary must contain at least 4 characters'
						},
						maxLength: {
							value: 20,
							message: 'Salary must contain 30 or fewer characters'
						}
					})}
				/>
				{errors.salary && errors.salary}
				<input
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
				{errors.job_position && errors.jobTitle.message}

				<input
					name='company'
					placeholder='Company name'
					ref={register({
						required: 'company',
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
				{errors.company && errors.company.message}
				{/* 	<input
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
				{errors.job_location && errors.location.message}
				<input
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
				/> */}

				<button type='submit'>Post Job</button>
			</form>
		</div>
	);
};

export default AddJob;
