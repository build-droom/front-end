import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';
import { useSwipeable } from 'react-swipeable';
import {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled,
	PurpleText,
	Highlighted,
	HoverText,
	EditDisplayFlex,
	DescriptionStyled,
	StyledDashboardHeading,
	DashboardButton,
	DashboardCenter,
	EditButtonDisplayFlex,
	EditScreenText,
	CardDiv
} from '../../styledcomp/Home';

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
		console.log('nooooooooooo')
	};

	// const handlersWorking = useSwipeable({
	// 	// onSwipedLeft: () => setTimeout(next, 0),
	// 	onSwipedLeft: () => setTimeout(nofunction, 0),
	// 	trackMouse: true,
	// })

	const handlersBugged = useSwipeable({
		onSwipedLeft: nofunction,
		trackMouse: true,
	})


	if (typeof state.companyAPIReducer.data[number] === 'undefined' || state.companyAPIReducer.data[number] === null) {
		return (
			<HomeStyled>
				<StyledHeading>No more jobs, </StyledHeading>
				<StyledHeading>time to go back to Tinder</StyledHeading>
		</HomeStyled>)

	} else {
		return (
			<CardDiv {...handlersBugged}>
				<StyledHeading><p>	Company:</p>   {state.companyAPIReducer.data[number].company}</StyledHeading>
				<StyledHeading>Salary: {state.companyAPIReducer.data[number].salary}</StyledHeading>
				<StyledHeading>Job: {state.companyAPIReducer.data[number].job_position}</StyledHeading>
				<StyledHeading>Educ: {state.companyAPIReducer.data[number].education}</StyledHeading>
				{/* <DashboardButton onClick={yesfunction}>Yes</DashboardButton>
				<DashboardButton onClick={nofunction}>No</DashboardButton> */}
			</CardDiv>
		);
	}
};

export default JobSeekerSwipe;
