import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRouteJobSeeker = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('jobseekertoken')) {
					return <Component {...props} />;
				} else {
					return <Redirect to='/' />;
				}
			}}
		/>
	);
};

export default ProtectedRouteJobSeeker;
