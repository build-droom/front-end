import React from 'react';
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
	EditScreenText
} from '../../styledcomp/Home';

const JobSeekerDashBoard = props => {
	return (
		<HomeStyled>
			<StyledHeading>Dashboard</StyledHeading>
			<Form className='jobSeekerDashboard'>
			<Input 
			name='seekers_location'
			placeholder='Location'
			/>
			<Input 
			name='job_industry'
			placeholder='Industry' 
			/>
			<Input 
			name='seekers_salary'
			placeholder='Salary' 
			/>
			{
				//to jobseekers swipe
			}
			<DashboardButton>Search</DashboardButton>
			{
				//to jobseekers matches
			}
			<DashboardButton onClick={() => props.history.push('/jobseeker-matches')}>
				Matches
			</DashboardButton>
			</Form>
		</HomeStyled>
	);
};

export default JobSeekerDashBoard;
