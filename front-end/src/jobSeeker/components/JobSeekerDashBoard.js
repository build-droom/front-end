import React from 'react';

const JobSeekerDashBoard = () => {
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
			<button> Matches</button>
		</div>
	);
};

export default JobSeekerDashBoard;
