import React, { useEffect } from 'react';
import { axiosWithAuthJobSeeker } from './../utils/axiosWithAuthJobSeeker';

const JobSeekerMatches = () => {
	useEffect(() => {
		axiosWithAuthJobSeeker()
			.get('/matches')
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	}, []);

	return <div>This is the Job seeker list</div>;
};

export default JobSeekerMatches;
