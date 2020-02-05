import { axiosWithAuthJobSeeker } from '../utils/axiosWithAuthJobSeeker';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axiosWithAuthJobSeeker()
		.get('/data')
		.then(res => {
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
		});
};

export const DELETE_DATA_START = 'DELETE_DATA_START';
export const DELETE_DATA_SUCCESS = 'DELETE_DATA_SUCCESS';
export const DELETE_DATA_FAILURE = 'DELETE_DATA_FAILURE';

export const deleteData = () => dispatch => {
	dispatch({ type: DELETE_DATA_START });
	axiosWithAuthJobSeeker()
		.delete('/data')
		.then(res => {
			dispatch({ type: DELETE_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: DELETE_DATA_FAILURE, payload: err.response.data.error });
		});
};

export const PUT_DATA_START = 'PUT_DATA_START';
export const PUT_DATA_SUCCESS = 'PUT_DATA_SUCCESS';
export const PUT_DATA_FAILURE = 'PUT_DATA_FAILURE';

export const putData = data => dispatch => {
	dispatch({ type: PUT_DATA_START });
	axiosWithAuthJobSeeker()
		.put('seekers/register', data)
		.then(res => {
			dispatch({ type: PUT_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: PUT_DATA_FAILURE, payload: err.response.data.error });
		});
};
//  ********************************** signup **************
export const PUSH_DATA_START = 'PUSH_DATA_START';
export const PUSH_DATA_SUCCESS = 'PUSH_DATA_SUCCESS';
export const PUSH_DATA_FAILURE = 'PUSH_DATA_FAILURE';
//  ********************************** signup **************
export const postData = data => dispatch => {
	dispatch({ type: PUSH_DATA_START });
	return axiosWithAuthJobSeeker()
		.post('/register', data)
		.then(res => {
			dispatch({ type: PUSH_DATA_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: PUSH_DATA_FAILURE, payload: err });
		});
};
