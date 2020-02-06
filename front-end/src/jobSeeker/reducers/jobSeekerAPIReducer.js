import {
	FETCH_DATA_START,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_FAILURE,
	PUT_DATA_START,
	PUT_DATA_SUCCESS,
	PUT_DATA_FAILURE,
	PUSH_DATA_START,
	PUSH_DATA_SUCCESS,
	PUSH_DATA_FAILURE,
	DELETE_DATA_START,
	DELETE_DATA_SUCCESS,
	DELETE_DATA_FAILURE
} from '../actions';

const initialState = {
	error: '',
	isLoading: false,
	data: []
};

export const jobSeekerAPIReducer = (state = initialState, action) => {
	switch (action.type) {
		// *****************  GET
		case FETCH_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload
			};
		case FETCH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// ************  Job filter

		// case JOB_FILTER:
		// /* 	const x = Math.floor(Math.random() * Math.floor(4));
		// 	const rposition = data[x].job_position; */
		// 	return {
		// 		...state,
		// 		data: state.data.filter(
		// 			item => item.job_position !== action.payload.job_position
		// 		)
		// 	};

		// *****************  PUT

		case PUT_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case PUT_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case PUT_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  PUSH
		case PUSH_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case PUSH_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case PUSH_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		// *****************  DELETE

		case DELETE_DATA_START:
			return {
				...state,
				isLoading: true
			};
		case DELETE_DATA_SUCCESS:
			return {
				...state,
				isLoading: true,
				data: action.payload
			};
		case DELETE_DATA_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default:
			return state;
	}
};
