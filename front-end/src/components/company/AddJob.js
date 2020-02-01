import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddJob = ({ saveJob }) => {
  const [job, setJob] = useState('');

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    saveJob(job);
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

        <input 
          name='location'
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
        {errors.location && errors.location.message}

        <select name="employment-type" ref={register}>
          <option value="Full-Time">Full-Time</option>
          <option value=" Part-Time"> Part-Time</option>
          <option value=" Internship"> Internship</option>
          <option value=" Seasonal"> Seasonal</option>
          <option value=" Contract"> Contract</option>
        </select>
        {errors.employmentType && errors.employmentType.message}

        <input 
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
        {errors.requiredExperience && errors.requiredExperience.message}
        
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
        />
        {errors.salary && errors.salary.message}
        <input type='submit' onClick={handleSubmit(onSubmit)}>Post Job</input>
      </form>
    </div>
  )
}

export default AddJob;