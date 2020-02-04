import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const HomeStyled = styled.div`
	padding: 14.1% 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	background: rgb(255,255,255);
	background: radial-gradient(circle, rgba(255,255,255,1) 36%, rgba(155,81,224,1) 100%);
`;

const StyledHeading = styled.h1`
	color: #2f8a90;
	font-size: 2em;
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	width: 250px;
	margin: 1vh 0;
	border-radius: 10px;
	&::placeholder {
		text-align:center;
		color: #2F8A90;
	}
`;

const LinkStyled = styled(Link)`
	margin-left: 10px;
	cursor: pointer;
	text-decoration: none;
`;

const Links = styled.div`
	font-size: 1.2em;
	text-align: center;
	display: flex;
	width: 60%;
	margin-left: 20%;
	align-items: center;
	justify-content: center;
`;

const ButtonStyled = styled.button`
	background-color: #9b51e0;
	color: white;
	margin-top: 5vh;
	padding: 20px 30px;
	border-radius: 35px;
	border:2px solid #2F8A90;
`;

const ButtonStyledSignUp = styled.button`
	background-color: #9b51e0;
	color: white;
	margin-top: 1vh;
	padding: 10px 50px;
	border-radius: 35px;
	border:2px solid #2F8A90;
`;

const TextArea = styled.textarea`
	width: 250px;
	margin: 1vh 0;
	border-radius: 10px;
	height: 75px;
	&::placeholder {
		text-align:center;
		font-family: -apple-system, 
		BlinkMacSystemFont, 'Segoe UI', 
		'Roboto', 'Oxygen', 'Ubuntu', 
		'Cantarell', 'Fira Sans', 'Droid Sans', 
		'Helvetica Neue', sans-serif;
		line-height:6;
		font-size:0.75rem;
		color: #2F8A90;
	}
`

export {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	TextArea,
	ButtonStyled,
	ButtonStyledSignUp
};
	
