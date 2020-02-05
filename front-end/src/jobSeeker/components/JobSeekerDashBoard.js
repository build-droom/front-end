import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './../actions/jobSeekerAPIAction';

const JobSeekerDashBoard = props => {
	const state = useSelector(state => state.companyLoginReducer);
	const id = localStorage.getItem('jobseekerid');

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getData(id));

		// axiosWithAuthJobSeeker()
		// 	.get(`/matches/matchseeker/${id}`)
		// 	.then(res => {
		// 		console.log(res.data);
		// 		console.log(res.data[2].job_position);
		// 		setJobs(res.data[2]);
		// 		console.log('jobs', jobs);
		// 	})

		// .catch(err => console.log(err));
	}, []);

	return (
		<div>
			<h1>Dashboard</h1>
			<form>
				{
					//to jobseekers swipe
				}
				<button
					type='submit'
					onClick={() => props.history.push('/jobseeker-swipe')}
				>
					Search by title
				</button>
				{
					//to jobseekers matches
				}
			</form>
			<button onClick={() => props.history.push('/jobseeker-matches')}>
				Matches
			</button>
		</div>
	);
};

export default JobSeekerDashBoard;
