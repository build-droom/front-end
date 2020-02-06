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
} from '../../../styledcomp/Home';

const CompanyDashboard = props => {
  return (
    <DescriptionStyled>
      <StyledDashboardHeading>DROOM</StyledDashboardHeading>
      <DashboardCenter>
        <EditButtonDisplayFlex>
          <h3>
            <PurpleText>
              <span onClick={() => props.history.push("/edit-profile")}>
                Edit
              </span>
            </PurpleText>
          </h3>
        </EditButtonDisplayFlex>
        <EditDisplayFlex>
          <EditScreenText>Company:</EditScreenText>
          <EditScreenText>Google</EditScreenText>
          {/* <EditScreenText>{props.company_name}</EditScreenText> */}
        </EditDisplayFlex>

        <EditDisplayFlex>
          <EditScreenText>Industry:</EditScreenText>
          <EditScreenText>Technology</EditScreenText>
          {/* <EditScreenText>{props.industry_type}</EditScreenText> */}
        </EditDisplayFlex>

        <EditDisplayFlex>
          <EditScreenText>Location:</EditScreenText>
          <EditScreenText>San Francisco</EditScreenText>
          {/* <EditScreenText>{props.companies_location}</EditScreenText> */}
        </EditDisplayFlex>
      </DashboardCenter>
      <DashboardCenter>
		<EditDisplayFlex>
        <EditScreenText>We are a Tech based company out of San Francisco. We work on revolutionizing the flow of Knowledge from Company to User. We love advancing our Tech and would love for you to join us!</EditScreenText>
        {/* <EditScreenText>{props.companies_description}</EditScreenText> */}
        </EditDisplayFlex>
		<h3>
          <DashboardButton onClick={() => props.history.push("/add-a-job")}>
            Add a Job
          </DashboardButton>
        </h3>
        <h3>
          <DashboardButton onClick={() => props.history.push("/current-jobs")}>
            Current Jobs
          </DashboardButton>
        </h3>
      </DashboardCenter>
    </DescriptionStyled>
  );
};

export default CompanyDashboard;
