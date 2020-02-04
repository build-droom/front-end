import React from 'react';

const JobSeekerDashBoard = props => {
	return (
		<div>
			<h1>Dashboard</h1>
			<input placeholder='location' />
			<input placeholder='industry' />
			<input placeholder='salary' />
			{
				//to jobseekers swipe
			}
			<button>Search</button>
			{
				//to jobseekers matches
			}
			<button onClick={() => props.history.push('/jobseeker-matches')}>
				Matches
			</button>
		</div>
	);
};

export default JobSeekerDashBoard;
