import React, { useEffect } from 'react';
import { axiosWithAuthJobSeeker } from './../utils/axiosWithAuthJobSeeker';
import { Button } from './../../styledcomp/Home';

const JobSeekerMatches = props => {
	const id = localStorage.getItem('jobseekerid');
	useEffect(() => {
		axiosWithAuthJobSeeker()
			.get(`/matches/matchseeker/${id}`)
			.then(res => {
				console.log('matches', res);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<h1>This is the Job seeker list</h1>
		</div>
	);
};

export default JobSeekerMatches;
