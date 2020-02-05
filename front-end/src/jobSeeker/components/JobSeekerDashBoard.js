import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchjobs } from './../actions/searchjobs';

const JobSeekerDashBoard = props => {
	const [searchTerm, setSearchTerm] = useState({ title: '' });

	const state = useSelector(state => state.companyLoginReducer);

	const dispatch = useDispatch();

	const handleChanges = e => {
		console.log(searchTerm);
		setSearchTerm({ ...state, [e.target.name]: e.target.value });
	};

	const search = searchTerm => {
		console.log('seasdda');
		dispatch(searchjobs(searchTerm)).then(res => {
			console.log(res).catch(err => console.log(err));
			props.history.push('/jobseeker-swipe');
		});
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<form onSubmit={search}>
				<input
					placeholder='title'
					value={searchTerm.title}
					name='title'
					onChange={handleChanges}
				/>

				{
					//to jobseekers swipe
				}
				<button type='submit' onClick={e => e.preventDefault}>
					Search
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
