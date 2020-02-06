import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

const JobSeekerSwipe = () => {
	const id = localStorage.getItem('jobseekerid');
	console.log(id);

	const state = useSelector(state => state);

	console.log('this is state from swipe', state.companyAPIReducer.data);

	//  Math.floor(Math.random() * Math.floor(3));
	const [save, setSave] = useState({
		seekers_id: id,
		joblisting_id: '4',
		fave_of_seeker: 'true',
		fave_for_job: 'false',
		matched_occupation: 'true'
	});
	const [number, setNumber] = useState(0);

	useEffect(() => {}, [number]);

	const randomfunction = () => {
		console.log('numnbenrbamndbksabdksja');
		console.log(number);
		setNumber(number + 1);
	};

	const yesfunction = () => {
		//post to matches
		axiosWithAuthJobSeeker()
			.post('/matches', {
				seekers_id: id,
				fave_of_seeker: 'true',
				fave_for_job: 'false',
				matched_occupation: 'true'
			})
			.then(res => {
				//call random
				randomfunction();
			})
			.catch();
		//call random
	};

	const nofunction = () => {
		//call random
		randomfunction();
	};

	if (state.companyAPIReducer.data[number].company == null) {
		return <h1>no more jobs</h1>;
	} else {
		return (
			<div>
				<h1>{state.companyAPIReducer.data[number].company}</h1>
				<button onClick={yesfunction}>Yes</button>
				<button onClick={nofunction}>No</button>
			</div>
		);
	}
};

export default JobSeekerSwipe;
