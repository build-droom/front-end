import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentJobs = () => {
	const [information, setInformation] = useState([]);

	//get request to show all jobs of this company
	useEffect(() => {
		axios()
			.get('/jobs/company/5')
			.then(response => {

				console.log('This is the data', response);
				setInformation(response.data);
			})
			.catch(error => {
				console.log('the data returned this error: ', error);
			});
	}, []);
	
	return (
		information.map((job, index) => (
			<div className='jobs' key={index}>
				<p>{job.job_position}</p>
				<p>{job.company_name}</p>
				<p>{job.experience_required}</p>
				<p>{job.salary}</p>
			</div>
		))

	);
};

export default CurrentJobs;
