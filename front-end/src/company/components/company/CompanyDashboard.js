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
	EditScreenText,
	Button,
} from '../../../styledcomp/Home';

const CompanyDashboard = props => {
	return (
		<DescriptionStyled>
			<Button onClick={() => props.history.goBack()}>Back</Button>

			<StyledDashboardHeading>DROOM</StyledDashboardHeading>
			<DashboardCenter>
				<EditButtonDisplayFlex>
					<h3>
						<PurpleText>
							<span onClick={() => props.history.push('/edit-profile')}>
								Edit
							</span>
						</PurpleText>
					</h3>
				</EditButtonDisplayFlex>
				<EditDisplayFlex>
					<EditScreenText>Company</EditScreenText>
					<EditScreenText>Company Name</EditScreenText>
					{/* <EditScreenText>{props.company_name}</EditScreenText> */}
				</EditDisplayFlex>

				<EditDisplayFlex>
					<EditScreenText>Industry</EditScreenText>
					<EditScreenText>Industry Name</EditScreenText>
					{/* <EditScreenText>{props.industry_type}</EditScreenText> */}
				</EditDisplayFlex>

				<EditDisplayFlex>
					<EditScreenText>Location</EditScreenText>
					<EditScreenText>Location Name</EditScreenText>
					{/* <EditScreenText>{props.companies_location}</EditScreenText> */}
				</EditDisplayFlex>
			</DashboardCenter>
			<DashboardCenter>
				<EditScreenText>Company Description</EditScreenText>
				{/* <EditScreenText>{props.company_description}</EditScreenText> */}
				<h3>
					<DashboardButton onClick={() => props.history.push('/add-a-job')}>
						Add a Job
					</DashboardButton>
				</h3>
				<h3>
					<DashboardButton onClick={() => props.history.push('/current-jobs')}>
						Current Jobs
					</DashboardButton>
				</h3>
			</DashboardCenter>
		</DescriptionStyled>
	);
};

export default CompanyDashboard;
