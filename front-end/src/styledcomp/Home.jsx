import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeStyled = styled.div`
	padding: 40px 0;
	margin: 0;
	display: flex;
	flex-direction: column;
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
	width: 60%;
	margin: 1vh 0;
	border-radius: 10px;
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
`;

export {
	HomeStyled,
	StyledHeading,
	Form,
	Input,
	Links,
	LinkStyled,
	ButtonStyled
};
