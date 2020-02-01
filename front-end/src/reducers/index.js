import { combineReducers } from "redux";
import { companyReducer } from './companyReducer'
import { jobSeekerReducer} from './jobSeekerReducer'




export default combineReducers({
  companyReducer,
  jobSeekerReducer
});