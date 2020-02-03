import { axiosWithAuthCompany } from '../utils/axiosWithAuthCompany';


export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    axiosWithAuthCompany()
      .get('/data')
      .then(res => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
      });
  };