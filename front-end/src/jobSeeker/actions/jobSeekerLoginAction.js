import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginJobSeeker = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuthJobSeeker()
    .post('/login', creds)
    .then(res => {
      localStorage.setItem('companytoken', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
      // return true;
    })
    .catch(err => {
      console.log('action error', err.response.data.error)
      dispatch({ type: LOGIN_FAILURE,
        payload: err.response.data.error
              })
    });
};