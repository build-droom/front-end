import React, { useEffect } from 'react';
import { axiosWithAuthJobSeeker } from './../utils/axiosWithAuthJobSeeker';

const JobSeekerSwipe = () => {
	const id = localStorage.getItem('jobseekerid');

	useEffect(() => {
		axiosWithAuthJobSeeker()
			.get(`/matches/${id}`)
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	}, []);

	return <div>This is the swipe page</div>;
};

export default JobSeekerSwipe;
