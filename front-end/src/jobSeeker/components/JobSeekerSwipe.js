import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';
import { useSwipeable } from 'react-swipeable';

import { Card, CardWrapper } from 'react-swipeable-cards';


import {
	HomeStyled,
	StyledHeading,
	StyledHeadingSwipe,
	Button,
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

const JobSeekerSwipe = props => {
	const id = localStorage.getItem('jobseekerid');
	console.log(id);

	const state = useSelector(state => state);

	console.log('this is state from swipe', state.companyAPIReducer.data);

	//  Math.floor(Math.random() * Math.floor(3));
	// const [save, setSave] = useState({
	// 	seekers_id: id,
	// 	joblisting_id: '4',
	// 	fave_of_seeker: 'true',
	// 	fave_for_job: 'false',
	// 	matched_occupation: 'true'
	// });
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


	const hello = () => {
		console.log('hello')
	}

	const nofunction = () => {
		//call random
		randomfunction();
		console.log('nooooooooooo');
	};

	// const handlersWorking = useSwipeable({
	// 	// onSwipedLeft: () => setTimeout(next, 0),
	// 	onSwipedLeft: () => setTimeout(nofunction, 0),
	// 	trackMouse: true,
	// })

	const handlersBugged = useSwipeable({
		onSwipedLeft: nofunction,
		onSwipedRight: nofunction,
		trackMouse: true
	});

	const cardWrap = {
		display: "flex",
		justifyContent: "center",
		// border: "1px red solid"
	}

	const cardStyle = {
		border: "1px #E5E5E5  solid",
		textAlign: "center",
		height: "70%",
		marginTop: "-50px",
		display: "flex",
		flexDirection: 'column',
		justifyContent: "center",
		bordeRadius: '20px',
		fontSize: '40px',
	boxShadow: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
	transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
	opacity: '1'
		
	}



	if (
		typeof state.companyAPIReducer.data[number] === 'undefined' ||
		state.companyAPIReducer.data[number] === null
	) {
		return (
			<HomeStyled>
				<Button onClick={() => props.history.goBack()}>Back</Button>

				<StyledHeading>No more jobs, </StyledHeading>
				<StyledHeading>time to go back to Tinder</StyledHeading>
			</HomeStyled>
		);
	} else {
		return (
			// <div>
			// 	 <Button onClick={() => props.history.goBack()}>Back</Button>
				
			
					
			// 		<CardDiv {...handlersBugged}>
			// 		<StyledHeading>
			// 			<p> Company:</p> {state.companyAPIReducer.data[number].company}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Salary: {state.companyAPIReducer.data[number].salary}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Job: {state.companyAPIReducer.data[number].job_position}
			// 		</StyledHeading>
			// 		<StyledHeading>
			// 			Educ: {state.companyAPIReducer.data[number].education}
			// 		</StyledHeading>
			// 		<DashboardButton onClick={yesfunction}>Yes</DashboardButton>
			// 		<DashboardButton onClick={nofunction}>No</DashboardButton>
					
			// 	</CardDiv> 
					
			

			
			// </div>
			<>
				<HomeStyled>
			<StyledHeadingSwipe>Swipe Right to Find your Dream Job</StyledHeadingSwipe>
				<CardWrapper style={cardWrap}>
					{state.companyAPIReducer.data.map(item => {
						return (
							
							<Card key={item} style={cardStyle} onSwipeRight={hello} >
									<p>{item.salary}</p>
									<p>{item.education}</p>
									<p>{item.employment_type}</p>
									<p>{item.job_location}</p>
								</Card>
							
						)
					})}
				</CardWrapper>
				</HomeStyled>
			</>
		
			
		);
	}
};

export default JobSeekerSwipe;
