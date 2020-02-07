import React, { useEffect } from 'react';
import { Button } from './../../styledcomp/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from './../actions/jobSeekerAPIAction';

const JobSeekerMatches = props => {
	const id = localStorage.getItem('jobseekerid');
	const dispatch = useDispatch();
	const state = useSelector(state => state.jobSeekerAPIReducer);
	console.log('this is state', state);

	useEffect(() => {
		dispatch(getMatches(id));
	}, []);

	return (
		<div>
			<Button onClick={() => props.history.goBack()}>Back</Button>
			<h1>This is the Job seeker matches</h1>
		</div>
	);
};

export default JobSeekerMatches;
