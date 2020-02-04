import { axiosWithAuthCompany } from '../utils/axiosWithAuthCompany';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginCompany = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	return axiosWithAuthCompany()
		.post('/login', creds)
		.then(res => {
			localStorage.setItem('companytoken', res.data.token);
			dispatch({ type: LOGIN_SUCCESS });
			// return true;
		})
		.catch(err => {
			console.log('err', err);
			console.log('action error', err);
			dispatch({ type: LOGIN_FAILURE, payload: err });
		});
};
