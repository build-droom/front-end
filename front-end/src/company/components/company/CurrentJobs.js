import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentJobs = props => {
	const [listings, setListings] = useState([]);

	useEffect(() => {
		axios
			.get('https://droombwlambda.herokuapp.com/api/companies/jobs')
			.then(response => {
				console.log('This is the data', response.data);
				setListings(response.data);
			})
			.catch(error => {
				console.log('the data returned this error: ', error);
			});
	}, []);
	
	return (

		listings.map((job, index) => (
			<div className='jobs' key={index}>
				<p>{job.jobTitle}</p>
				<p>{job.company_name}</p>
				<p>{job.requiredExperience}</p>
				<p>{job.salary}</p>
			</div>
		))
	);
};

export default CurrentJobs;
