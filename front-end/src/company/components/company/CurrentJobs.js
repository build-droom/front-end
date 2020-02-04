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
		<ul>
			{/* {information.map((job, index) => (
				<li key={index}>{job}</li>
			))} */}
		</ul>
	);
};

export default CurrentJobs;
